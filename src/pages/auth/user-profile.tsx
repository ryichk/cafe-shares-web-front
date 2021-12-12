import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import { ErrorAlert, SuccessAlert } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { CheckIcon, PencilIcon, UserIcon } from '../../icons';
import { Header, Footer } from '../../layouts';

const UserProfile: NextPage = () => {
  const { user, setUser } = useContext(AuthContext);

  const [profile, setProfile] = useState(
    user?.attributes.profile ? user?.attributes.profile : 'はじめまして。よろしくお願いします。',
  );
  const [isSetting, setIsSetting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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

  const updateProfile = async () => {
    if (isInvalidProfile(profile)) return;

    try {
      await Auth.updateUserAttributes(user, {
        profile: profile,
      });
      setIsError(false);
      setSuccessMessage('プロフィール情報を更新しました。');
      setIsSuccess(true);
      setIsSetting(false);

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

    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      {isSuccess ? <SuccessAlert message={successMessage} /> : <></>}
      <div className='bg-primary min-h-screen'>
        <Header />
        <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10'>
          <div className='avatar m-auto'>
            <div className='rounded-full w-24 h-24 bg-gray-200'>
              <UserIcon classes='h-12 m-auto mt-6' />
            </div>
          </div>
          <div className='m-auto mt-5'>
            <h1>{user?.username}</h1>
          </div>
          <div className='relative m-auto p-3'>
            {isSetting ? (
              <>
                <textarea
                  name='profile'
                  className='textarea h-24 textarea-bordered textarea-primary'
                  placeholder='はじめまして。よろしくお願いします。'
                  value={profile}
                  onChange={handleTextareaChange}
                />
                <a className='absolute bottom-0 right-0' onClick={updateProfile}>
                  <CheckIcon classes='h-5' />
                </a>
              </>
            ) : (
              <>
                <p className=''>{profile}</p>
                <a className='absolute bottom-0 right-0' onClick={() => setIsSetting(true)}>
                  <PencilIcon classes='h-4' />
                </a>
              </>
            )}
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
