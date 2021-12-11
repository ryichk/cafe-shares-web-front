import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import { Button, ErrorAlert } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { ArrowLeftIcon, LockIcon, UserIcon } from '../../icons';

const UserProfile: NextPage = () => {
  const { user, setUser } = useContext(AuthContext);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      setIsError(false);
      setErrorMessage('');
      Router.push('/auth/sign-in');
    } catch (error) {
      setIsError(true);
      setErrorMessage(`${error}`);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
        setIsError(false);
        setErrorMessage('');
      } catch (error) {
        setIsError(true);
        setErrorMessage(`${error}`);
      }
    };
    init();
  }, []);

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10'>
        <div className='mb-20'>
          <Link href='/'>
            <a>
              <ArrowLeftIcon classes='h-5 w-5' />
            </a>
          </Link>
        </div>
        <div>
          <h1>{user?.username}</h1>
          <div>
            <Button btnColor='btn-secondary' size='medium' label='sign out' onClick={signOut} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
