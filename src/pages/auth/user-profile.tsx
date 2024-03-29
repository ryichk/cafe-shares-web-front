import { Auth, Storage } from 'aws-amplify';
import { NextPage } from 'next';
import Image, { ImageLoader } from 'next/image';
import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import { ErrorAlert, SuccessAlert } from '../../components';
import { AlertContext, AuthContext } from '../../contexts';
import { CheckIcon, CloseIcon, PencilIcon, UserIcon } from '../../icons';
import { Header, Footer } from '../../layouts';

const UserProfile: NextPage = () => {
  const { user, setUser } = useContext(AuthContext);
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

  const [previewURL, setPreviewURL] = useState('');
  const [imageName, setImageName] = useState(
    user?.attributes.picture ? user.attributes.picture : '',
  );
  const [imageURL, setImageURL] = useState('');
  const [profile, setProfile] = useState(
    user?.attributes.profile ? user.attributes.profile : 'はじめまして。よろしくお願いします。',
  );

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);

      const fileName = `${user?.username}_${file.name}`;
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

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setIsSuccess(false);
    setSuccessMessage('');

    const { target } = event;
    if (!(target instanceof HTMLTextAreaElement)) return;

    const { name, value } = target;
    if (isInvalidProfile(value)) return;

    switch (name) {
      case 'profile':
        setProfile(value);
        break;
    }
  };

  const isInvalidProfile = (value: string): boolean => {
    if (value.length > 140) {
      setErrorMessage('プロフィール情報は140字以下にしてください');
      setIsError(true);
      return true;
    } else {
      setErrorMessage('');
      setIsError(false);
      return false;
    }
  };

  const updateUserProfile = async () => {
    if (isInvalidProfile(profile)) return;

    try {
      await Auth.updateUserAttributes(user, {
        picture: imageName,
        profile,
      });
      setIsError(false);
      setSuccessMessage('プロフィール情報を更新しました。');
      setIsSuccess(true);

      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (error) {
      setErrorMessage(error);
      setIsError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (!user) {
      Router.push('/auth/sign-in');
    }

    if (user?.attributes.picture) {
      const getImageURL = async () => {
        try {
          const fileURL = await Storage.get(user.attributes.picture);
          setImageURL(fileURL);
        } catch (error) {
          console.error(error);
        }
      };
      getImageURL();
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  const avatarImageLoader: ImageLoader = () => imageURL;

  const Avatar = () => (
    <div className='avatar m-auto w-24 h-24 rounded-full shadow'>
      {user?.attributes.picture && imageURL ? (
        <div className='rounded-full'>
          <Image
            loader={avatarImageLoader}
            src={imageURL}
            alt={user?.username}
            height={100}
            width={100}
            unoptimized
          />
        </div>
      ) : (
        <div className='rounded-full w-24 h-24 bg-gray-200'>
          <UserIcon classes='h-12 m-auto mt-6' />
        </div>
      )}
    </div>
  );

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      {isSuccess ? <SuccessAlert message={successMessage} /> : <></>}
      <Header />
      <div className='pt-44 min-h-screen dark:bg-dark dark:text-gray-300'>
        <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10 dark:bg-gray-700'>
          <Avatar />
          <div className='m-auto mt-5'>
            <h1>{user?.username}</h1>
          </div>
          <div className='m-auto p-3'>
            <p className=''>{profile}</p>
          </div>
          <div className='text-center border rounded p-1'>
            <label htmlFor='edit-profile'>
              <PencilIcon classes='h-5 pb-1 mr-1 inline' />
              プロフィールを編集
            </label>
            <input type='checkbox' id='edit-profile' className='modal-toggle' />
            <div className='modal'>
              <div className='modal-box dark:bg-gray-600 dark:text-gray-300'>
                <div className='modal-action mb-5 justify-between'>
                  <label htmlFor='edit-profile'>
                    <CloseIcon classes='h-5' />
                  </label>
                  プロフィールを編集
                  <label htmlFor='edit-profile' onClick={updateUserProfile}>
                    <CheckIcon classes='h-6 text-primary' />
                  </label>
                </div>
                <div className='mb-5'>
                  {previewURL ? (
                    <div className='avatar m-auto w-24 h-24 rounded-full shadow'>
                      <div className='rounded-full'>
                        <Image src={previewURL} alt={imageName} height={100} width={100} />
                      </div>
                    </div>
                  ) : (
                    <Avatar />
                  )}
                  <input
                    name='picture'
                    type='file'
                    accept='image/*'
                    className='block m-auto text-xs'
                    onChange={handleFileChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='text-left text-gray-500 dark:text-gray-400'>自己紹介</label>
                  <textarea
                    name='profile'
                    className='textarea h-24 textarea-bordered textarea-primary dark:bg-gray-700'
                    placeholder='はじめまして。よろしくお願いします。'
                    value={profile}
                    onChange={handleTextareaChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex m-auto mt-5 text-center'>
            <div className='m-2'>
              <p className='text-xl'>140</p>
              <p className='text-sm'>投稿</p>
            </div>
            <div className='m-2'>
              <p className='text-xl'>140</p>
              <p className='text-sm'>フォロワー</p>
            </div>
            <div className='m-2'>
              <p className='text-xl'>140</p>
              <p className='text-sm'>フォロー中</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
