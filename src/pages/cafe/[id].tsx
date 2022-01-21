import { API, graphqlOperation, Storage } from 'aws-amplify';
import { format } from 'date-fns';
import { NextPage, GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react';

import {
  CreatePostInput,
  OnCreatePostSubscriptionVariables,
  OnCreatePostSubscription,
  Post,
} from '../../API';
import hotpepperImg from '../../assets/images/hotpepper-s.gif';
import { ErrorAlert, InfoAlert, PostCard, SuccessAlert } from '../../components';
import { AuthContext, AlertContext } from '../../contexts';
import { createPost } from '../../graphql/mutations';
import { onCreatePost } from '../../graphql/subscriptions';
import { useFetchPosts, useInfiniteScroll } from '../../hooks';
import { CloseIcon, PlusIcon } from '../../icons';
import type {
  CafeInfo,
  HotpepperResponse,
  IOnCreatePostSubscriptionObject,
} from '../../interfaces';
import { Header, Footer } from '../../layouts';

const Cafe: NextPage<{
  cafe: CafeInfo;
}> = ({ cafe }) => {
  const { user } = useContext(AuthContext);
  const currentUsername = user?.username;

  const {
    isError,
    errorMessage,
    isInfo,
    infoMessage,
    isSuccess,
    successMessage,
    setIsError,
    setErrorMessage,
    setIsInfo,
    setInfoMessage,
    setIsSuccess,
    setSuccessMessage,
  } = useContext(AlertContext);

  const [contents, setContents] = useState('');
  const [previewURLs, setPreviewURLs] = useState<Array<string>>([]);
  const [imageNames, setImageNames] = useState<Array<string>>([]);
  const [posts, setPosts] = useState<Array<Post | null>>([]);
  const [nextToken, setNextToken] = useState('0');
  const [pageNumber, setPageNumber] = useState(0);
  const lastPostCardRef = useRef();
  useFetchPosts(cafe.id, nextToken, setNextToken, setPosts, pageNumber);
  useInfiniteScroll(lastPostCardRef, setPageNumber);

  const cafeInfo = {
    アクセス: cafe.access,
    住所: cafe.address,
    最寄駅: cafe.station_name,
    営業時間: cafe.open,
    '23時以降': cafe.midnight,
    定休日: cafe.close,
    ランチ: cafe.lunch,
    コース: cafe.course,
    飲み放題: cafe.free_drink,
    食べ放題: cafe.free_food,
    英語メニュー: cafe.english,
    予算: cafe.budget.average,
    予算備考: cafe.budget_memo,
    カード決済: cafe.card,
    総席数: `${cafe.capacity}席`,
    個室: cafe.private_room,
    掘りごたつ: cafe.horigotatsu,
    座敷: cafe.tatami,
    パーティ収容人数: `${cafe.party_capacity}人`,
    'ウェディング・二次会利用': cafe.wedding,
    貸切: cafe.charter,
    Wifi: cafe.wifi,
    駐車場: cafe.parking,
    お子様連れ: cafe.child,
    バリアフリー: cafe.barrier_free,
    ペット: cafe.pet,
    お店の詳細: cafe.shop_detail_memo,
    その他: cafe.other_memo,
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLTextAreaElement)) return;

    const { value } = target;
    setContents(value);
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    for (const file of files) {
      if (currentUsername && file && file.type.includes('image')) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewURLs((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);

        const now = format(new Date(), 'yyyyMMddhhmmss');
        const fileName = `post_picture_${currentUsername}_${now}_${file.name}`;
        setImageNames((prev) => [...prev, fileName]);

        try {
          await Storage.put(fileName, file);
          setErrorMessage('');
          setIsError(false);
        } catch (error) {
          setErrorMessage(error);
          setIsError(true);
        }
      }
    }
  };

  const isValidPost = () => {
    if (imageNames.length >= 1 && imageNames.length <= 10) {
      return true;
    } else if (imageNames.length === 0) {
      setErrorMessage('写真が選択されていません。投稿する写真を選択してください。');
      return false;
    } else if (imageNames.length > 10) {
      setErrorMessage('1回の投稿で選択できる写真は10枚までです。');
      return false;
    }
  };

  const sendPost = async () => {
    try {
      if (isValidPost()) {
        const createPostInput: CreatePostInput = {
          cafeId: String(cafe.id),
          cafeName: cafe.name,
          content: contents,
          pictures: imageNames,
        };
        await API.graphql(
          graphqlOperation(createPost, {
            input: createPostInput,
          }),
        );
        setContents('');
        setImageNames([]);
        setPreviewURLs([]);
        setErrorMessage('');
        setIsError(false);
        setSuccessMessage('投稿が完了しました。');
        setIsSuccess(true);
      } else {
        setIsError(true);
        setSuccessMessage('');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
      setIsError(true);
      setSuccessMessage('');
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    let unsubscribe;
    if (currentUsername) {
      const onCreatePostSubscriptionVariables: OnCreatePostSubscriptionVariables = {
        owner: currentUsername,
      };
      const subscription = API.graphql(
        graphqlOperation(onCreatePost, onCreatePostSubscriptionVariables),
      );
      if ('subscribe' in subscription) {
        const sub = subscription.subscribe({
          next: (object: IOnCreatePostSubscriptionObject) => {
            const data = object.value.data as OnCreatePostSubscription;
            const post = data.onCreatePost;
            if (post) {
              const newPostObject = async (): Promise<Post> => {
                const pictureURLs = [];
                for (const picture of post.pictures) {
                  const pictureURL = await Storage.get(picture);
                  pictureURLs.push(pictureURL);
                }

                return {
                  __typename: 'Post',
                  id: post.id,
                  cafeId: post.cafeId,
                  cafeName: post.cafeName,
                  content: post.content,
                  pictures: pictureURLs,
                  owner: post.owner,
                  createdAt: post.createdAt,
                  updatedAt: post.updatedAt,
                };
              };
              newPostObject().then((newPost) => setPosts((prev) => [newPost, ...prev]));
            }
          },
          error: (error) => {
            console.error(error);
          },
        });
        unsubscribe = () => {
          sub.unsubscribe();
        };
      }
    }

    return unsubscribe;
  }, []);

  return (
    <>
      <NextSeo
        title={cafe.name}
        description={cafe.catch}
        canonical={`https://cafe-shares.com/cafe/${cafe.id}`}
        openGraph={{
          images: [
            {
              url: cafe.photo.pc.l,
              alt: cafe.name,
            },
          ],
          url: `https://cafe-shares.com/cafe/${cafe.id}`,
          title: cafe.name,
          description: cafe.catch,
        }}
      />
      {isError ? (
        <div className='fixed w-full z-50 bg-secondary rounded-xl shadow-xl'>
          <ErrorAlert message={errorMessage} />
        </div>
      ) : (
        <></>
      )}
      {isInfo ? (
        <div className='fixed w-full z-50 bg-secondary rounded-xl shadow-xl'>
          <InfoAlert message={infoMessage} />
        </div>
      ) : (
        <></>
      )}
      {isSuccess ? (
        <div className='fixed w-full z-50 bg-secondary rounded-xl shadow-xl'>
          <SuccessAlert message={successMessage} />
        </div>
      ) : (
        <></>
      )}
      <Header />
      <div className='pt-32 dark:bg-dark dark:text-gray-300'>
        <div className='m-auto max-w-5xl mt-5 p-5 sm:p-14 rounded-t-xl'>
          <h1 className='text-3xl sm:text-4xl font-bold'>{cafe.name}</h1>
          <div className='my-5'>
            <p className='text-lg sm:text-xl'>{cafe.catch}</p>
          </div>
          <div className='mb-5'>
            <div
              className='h-56 sm:h-96 rounded'
              style={{
                background: `no-repeat center / cover url(${cafe.photo.pc.l})`,
              }}
            />
            <div className='m-auto pt-1'>
              <Image src={hotpepperImg} alt='hotpepper' />
            </div>
            <div className='mt-5'>
              {Object.entries(cafeInfo).map(([key, value]) => (
                <div className='flex border-t py-3' key={key}>
                  <div className='w-1/4 font-bold'>{key}</div>
                  <div className='w-3/4 ml-1'>{value}</div>
                </div>
              ))}
              <div className='border-t border-b py-3'>
                <div className='font-semibold'>店舗URL</div>
                <div className='mt-1'>
                  <a
                    href={cafe.urls.pc}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link link-primary'
                  >
                    {cafe.urls.pc}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {currentUsername ? (
            <>
              <label htmlFor='posting-form' className='mt-5 btn btn-wide btn-primary modal-button'>
                投稿する
              </label>
              <input type='checkbox' id='posting-form' className='modal-toggle' />
              <div className='modal'>
                <div className='modal-box dark:bg-gray-600 dark:text-gray-300'>
                  <div className='form-control'>
                    <div className='flex justify-between'>
                      <span className='text-lg font-bold'>投稿フォーム</span>
                      <label htmlFor='posting-form'>
                        <CloseIcon classes='h-4' />
                      </label>
                    </div>
                    <div className='mt-5'>
                      <div className='form-control'>
                        <textarea
                          rows={5}
                          className='textarea textarea-primary bg-white dark:bg-gray-700'
                          value={contents}
                          onChange={handleTextareaChange}
                        />
                        {previewURLs.length ? (
                          <></>
                        ) : (
                          <label className='btn mt-4 dark:bg-dark'>
                            写真を選択
                            <input
                              multiple
                              type='file'
                              accept='image/*'
                              className='hidden'
                              onChange={handleFileChange}
                            />
                          </label>
                        )}
                        <div className='mt-3 grid grid-cols-4 sm:grid-cols-5 gap-2'>
                          {previewURLs.length ? (
                            previewURLs.map((previewURL, previewIndex) => (
                              <div
                                key={previewIndex}
                                className='w-full h-20'
                                style={{
                                  background: `no-repeat center / cover url(${previewURL})`,
                                }}
                              >
                                <label
                                  className='btn btn-circle btn-xs opacity-50'
                                  onClick={async () => {
                                    await Storage.remove(imageNames[previewIndex]);
                                    setImageNames((prev) =>
                                      [...prev].filter(
                                        (imageName, index) => index !== previewIndex,
                                      ),
                                    );
                                    setPreviewURLs((prev) =>
                                      [...prev].filter((url, index) => index !== previewIndex),
                                    );
                                  }}
                                >
                                  <CloseIcon classes='h-4' />
                                </label>
                              </div>
                            ))
                          ) : (
                            <></>
                          )}
                          {previewURLs.length > 0 && previewURLs.length < 10 ? (
                            <div className='m-auto'>
                              <label className='btn btn-circle opacity-80'>
                                <PlusIcon classes='h-5' />
                                <input
                                  multiple
                                  type='file'
                                  accept='image/*'
                                  className='hidden'
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className='modal-action mr-1'>
                        <label
                          htmlFor='posting-form'
                          className='btn btn-primary rounded-2xl'
                          onClick={sendPost}
                        >
                          投稿
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <label
              className='mt-5 btn btn-wide btn-primary modal-button'
              onClick={() => {
                setInfoMessage('投稿するにはログインが必要です');
                setIsInfo(true);
              }}
            >
              投稿する
            </label>
          )}
          <div className='mt-10'>
            <h2 className='font-bold'>投稿一覧</h2>
            <div className='flex flex-wrap lg:flex-row sm:flex-col'>
              {posts.length ? (
                posts.map((post: Post) => <PostCard key={post.id} post={post} />)
              ) : (
                <>まだ投稿がありません。</>
              )}
              <div ref={lastPostCardRef} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const URL = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&id=${id}`;
  let cafe: CafeInfo | null = null;
  try {
    const res = await fetch(URL);
    const data: HotpepperResponse = await res.json();
    cafe = data.results.shop[0];
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      cafe,
    },
  };
};

export default Cafe;
