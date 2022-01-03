import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import { Amplify, API, graphqlOperation, Storage, withSSRContext } from 'aws-amplify';
import { format } from 'date-fns';
import { NextPage, GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

import {
  CreatePostInput,
  ModelSortDirection,
  OnCreatePostSubscriptionVariables,
  OnCreatePostSubscription,
  Post,
  PostsByDateQueryVariables,
  PostsByDateQuery,
} from '../../API';
import hotpepperImg from '../../assets/images/hotpepper-s.gif';
import awsExports from '../../aws-exports';
import { ErrorAlert, SuccessAlert } from '../../components';
import { AlertContext } from '../../contexts';
import { createPost } from '../../graphql/mutations';
import { postsByDate } from '../../graphql/queries';
import { onCreatePost } from '../../graphql/subscriptions';
import { CloseIcon } from '../../icons';
import type {
  CafeInfo,
  HotpepperResponse,
  ICognitoUser,
  IOnCreatePostSubscriptionObject,
} from '../../interfaces';
import { Header, Footer } from '../../layouts';

const Cafe: NextPage<{
  cafe: CafeInfo;
  currentUsername: string;
  initialPosts: Array<Post | null>;
}> = ({ cafe, currentUsername, initialPosts }) => {
  // const { user } = useContext(AuthContext);
  const {
    isError,
    errorMessage,
    isSuccess,
    successMessage,
    setIsError,
    setErrorMessage,
    setIsSuccess,
    setSuccessMessage,
  } = useContext(AlertContext);

  const [contents, setContents] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [imageName, setImageName] = useState('');
  const [posts, setPosts] = useState(initialPosts);

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
    const file = event.target.files[0];
    if (currentUsername && file && file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);

      const now = format(new Date(), 'yyyyMMddhhmmss');
      const fileName = `post_picture_${currentUsername}_${file.name}_${now}`;
      setImageName(fileName);

      try {
        await Storage.put(fileName, file);
        setErrorMessage('');
        setIsError(false);
      } catch (error) {
        setErrorMessage(error);
        setIsError(true);
      }
    }
  };

  const isValidPost = () => {
    if (imageName) {
      return true;
    } else {
      setErrorMessage('写真が選択されていません。投稿する写真を選択してください。');
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
          picture: imageName,
        };
        await API.graphql(
          graphqlOperation(createPost, {
            input: createPostInput,
          }),
        );
        setContents('');
        setImageName('');
        setPreviewURL('');
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
                const pictureURL = await Storage.get(post.picture);

                return {
                  __typename: 'Post',
                  id: post.id,
                  cafeId: post.cafeId,
                  cafeName: post.cafeName,
                  content: post.content,
                  picture: pictureURL,
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
            setErrorMessage(error.error.errors[0].message);
            setIsError(true);
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
      {isSuccess ? (
        <div className='fixed w-full z-50 bg-secondary rounded-xl shadow-xl'>
          <SuccessAlert message={successMessage} />
        </div>
      ) : (
        <></>
      )}
      <div className='bg-primary'>
        <Header />
        <div className='bg-secondary m-auto max-w-5xl mt-5 p-5 sm:p-14 rounded-t-xl'>
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
                <div className='modal-box'>
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
                          className='textarea textarea-primary bg-white'
                          value={contents}
                          onChange={handleTextareaChange}
                        />
                        <label className='btn mt-4'>
                          写真を選択
                          <input
                            type='file'
                            accept='image/*'
                            className='hidden'
                            onChange={handleFileChange}
                          />
                        </label>
                        {previewURL ? (
                          <div
                            className='mt-3 h-56 sm:h-96'
                            style={{
                              background: `no-repeat center / cover url(${previewURL})`,
                            }}
                          />
                        ) : (
                          <></>
                        )}
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
            <></>
          )}
          <div className='mt-10'>
            <h2 className='font-bold'>投稿一覧</h2>
            <div className='flex flex-wrap lg:flex-row sm:flex-col'>
              {posts.length ? (
                posts?.map((post: Post) => (
                  <div
                    className='card bg-white my-5 mx-5 max-w-sm w-screen shadow-xl'
                    key={post.id}
                  >
                    <div
                      className='h-56 sm:h-96'
                      style={{
                        background: `no-repeat center / cover url(${post.picture})`,
                      }}
                    />
                    <div className='card-body'>
                      <div className='flex items-center'>
                        {/* <div className='avatar'>
                        <div className='rounded-full w-7 h-7'>
                          <Image src={} height={50} width={50} />
                        </div>
                      </div> */}
                        <span className='ml-2 text-sm font-bold'>{post.owner}</span>
                      </div>
                      <p>
                        {post.content.length < 30 ? (
                          post.content
                        ) : (
                          <>
                            {post.content.substr(0, 20)}
                            <span
                              id={`read-more-${post.id}`}
                              className='text-sm text-primary'
                              onClick={() => {
                                document
                                  .getElementById(`read-more-${post.id}`)
                                  .classList.add('hidden');
                                document
                                  .getElementById(`content-${post.id}`)
                                  .classList.remove('hidden');
                              }}
                            >
                              ...続きを読む
                            </span>
                            <span id={`content-${post.id}`} className='hidden'>
                              {post.content.substr(20)}
                            </span>
                          </>
                        )}
                      </p>
                      <p className='mt-2 text-xs'>
                        投稿日時: {format(new Date(post.createdAt), 'yyyy年MM月dd日HH時mm分ss秒')}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>まだ投稿がありません。</>
              )}
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

  const { Auth } = withSSRContext(context);
  let currentUsername = '';
  try {
    const user: ICognitoUser = await Auth.currentAuthenticatedUser();
    currentUsername = user.username;
  } catch (error) {
    console.error(error);
  }

  Amplify.configure({ ...awsExports });
  const initialPosts: Array<Post | null> = [];
  try {
    const postsByDateQueryVariables: PostsByDateQueryVariables = {
      type: 'Post',
      filter: { cafeId: { eq: cafe.id } },
      sortDirection: ModelSortDirection.DESC,
    };
    const response = await API.graphql({
      query: postsByDate,
      variables: postsByDateQueryVariables,
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    });
    if ('data' in response && response.data) {
      const getPostData = response.data as PostsByDateQuery;
      const listPosts = getPostData.postsByDate;
      if (listPosts.items) {
        for (const post of listPosts.items) {
          const pictureURL = await Storage.get(post.picture);
          const postObject: Post = {
            __typename: 'Post',
            id: post.id,
            cafeId: post.cafeId,
            cafeName: post.cafeName,
            content: post.content,
            picture: pictureURL,
            owner: post.owner,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
          };
          initialPosts.push(postObject);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      cafe,
      currentUsername,
      initialPosts,
    },
  };
};

export default Cafe;
