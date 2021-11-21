import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Header, Footer } from '../../layouts';
import { Button, ErrorAlert, SuccessAlert } from '../../components';
import { LockIcon, MessageIcon, UserIcon } from '../../icons';

const ResetPassword: NextPage = () => {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'code':
        setCode(value);
        break;
      case 'password':
        setNewPassword(value);
        break;
    }
  };

  const sendResetPasswordCode = async () => {
    try {
      await Auth.forgotPassword(username);
      setIsSent(true);
      setSuccessMessage('登録済みメールアドレス宛にパスワードリセットの認証コードを送信しました。');
      setIsSuccess(true);
      setIsError(false);
      setErrorMessage('');
    } catch (error) {
      setIsError(true);
      setErrorMessage(`${error}`);
    }
  };

  const changePassword = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      router.push('/auth/sign-in');
    } catch (error) {
      setErrorMessage(`${error}`);
      setIsError(true);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        if (currentUser) {
          router.push('/user-profile');
        }
        setIsError(false);
        setErrorMessage('');
      } catch (error) {
        console.error(error);
      }
    };
    init();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      {isSuccess ? <SuccessAlert message={successMessage} /> : <></>}
      <div className='bg-primary min-h-screen'>
        <Header />
        <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10'>
          <div className='form-control'>
            <div className='mb-6'>
              <h1 className='text-xl font-bold'>Password Reset</h1>
            </div>
            {isSent ? (
              <>
                <div className='m-1 p-2'>
                  <div className='flex border-b border-primary'>
                    <label className='label'>
                      <MessageIcon classes='h-6 w-6 text-primary' />
                    </label>
                    <input
                      name='code'
                      type='text'
                      placeholder='verification code'
                      className='bg-white ml-1 p-2'
                      value={code}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='m-1 p-2'>
                  <div className='flex border-b border-primary'>
                    <label className='label'>
                      <LockIcon classes='h-6 w-6 text-primary' />
                    </label>
                    <input
                      name='password'
                      type='password'
                      placeholder='new password'
                      className='bg-white ml-1 p-2'
                      value={newPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='mt-5 mx-auto'>
                  <Button size='large' label='send' onClick={changePassword} />
                </div>
              </>
            ) : (
              <>
                <div className='m-1 p-2'>
                  <div className='flex border-b border-primary'>
                    <label className='label'>
                      <UserIcon classes='h-6 w-6 text-primary' />
                    </label>
                    <input
                      name='username'
                      type='text'
                      placeholder='username'
                      className='bg-white ml-1 p-2'
                      value={username}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='mt-5 mx-auto'>
                  <Button size='large' label='send' onClick={sendResetPasswordCode} />
                </div>
              </>
            )}
          </div>
        </div>
        <div className='mt-10 text-center'>
          <p>No account?</p>
          <div className='mt-2'>
            <Link href='/auth/sign-up'>
              <a>
                <Button btnColor='btn-secondary' size='medium' label='sign up' />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
