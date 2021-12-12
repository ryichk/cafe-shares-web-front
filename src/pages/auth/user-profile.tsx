import { NextPage } from 'next';
import Router from 'next/router';
import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { UserIcon } from '../../icons';
import { Header, Footer } from '../../layouts';

const UserProfile: NextPage = () => {
  const { user } = useContext(AuthContext);

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
          <div className='m-auto mt-5'>
            <p>user profile description</p>
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
