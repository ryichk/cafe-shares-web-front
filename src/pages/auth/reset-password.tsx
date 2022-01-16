import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { Button, ErrorAlert, SuccessAlert } from '../../components';
import { AlertContext, AuthContext } from '../../contexts';
import { LockIcon, MessageIcon, UserIcon } from '../../icons';
import { Header, Footer } from '../../layouts';

const ResetPassword: NextPage = () => {
  const { user } = useContext(AuthContext);
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

  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSent, setIsSent] = useState(false);

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
      setSuccessMessage(
        '登録されているメールアドレスにパスワードリセットの確認コードを送信しました。',
      );
      setIsSuccess(true);
      setIsError(false);
      setErrorMessage('');
    } catch (error) {
      switch (error.name) {
        case 'AuthError':
          setErrorMessage('ユーザー名を入力してください。');
          break;
        case 'UserNotFoundException':
          setErrorMessage('登録されていないユーザー名です。');
          break;
        case 'InvalidParameterException':
          setErrorMessage('アカウントが有効化されていないため、パスワードをリセットできません。');
          break;
        default:
          setErrorMessage(`${error}`);
          break;
      }

      setIsError(true);
    }
  };

  const changePassword = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      Router.push('/auth/sign-in');
    } catch (error) {
      setErrorMessage(`${error}`);
      setIsError(true);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (user) {
      Router.push('/auth/user-profile');
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      {isSuccess ? <SuccessAlert message={successMessage} /> : <></>}
      <Header />
      <div className='pt-36 min-h-screen dark:bg-dark dark:text-gray-300'>
        <div className='card bg-white shadow-2xl w-96 p-10 m-auto mt-10 dark:bg-gray-700'>
          <div className='form-control'>
            <div className='mb-6'>
              <h1 className='text-xl font-bold text-center'>Password Reset</h1>
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
                      placeholder='確認コード'
                      className='bg-white ml-1 p-2 dark:bg-gray-700'
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
                      placeholder='新しいパスワード'
                      className='bg-white ml-1 p-2 dark:bg-gray-700'
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
                      placeholder='ユーザー名'
                      className='bg-white ml-1 p-2 dark:bg-gray-700'
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
          <p>アカウントがありませんか？</p>
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
