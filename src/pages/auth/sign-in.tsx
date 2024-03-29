import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { Button, ErrorAlert } from '../../components';
import { AlertContext, AuthContext } from '../../contexts';
import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from '../../icons';
import { Header, Footer } from '../../layouts';

const SignIn: NextPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const { isError, errorMessage, setIsError, setErrorMessage } = useContext(AlertContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMasked, setIsMasked] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const signIn = async () => {
    try {
      const signInUser = await Auth.signIn({
        username,
        password,
      });
      setUser(signInUser);
      setErrorMessage('');
      setIsError(false);
    } catch (error) {
      switch (error.name) {
        case 'AuthError':
          setErrorMessage('ユーザー名を入力してください。');
          break;
        case 'UserNotFoundException':
          setErrorMessage('ユーザーが存在しません。');
          break;
        case 'InvalidParameterException':
          setErrorMessage('パスワードを入力してください。');
          break;
        case 'UserNotConfirmedException':
          setErrorMessage('確認コードでアカウントを有効化してください。');
          break;
        case 'NotAuthorizedException':
          setErrorMessage('ユーザー名またはパスワードが正しくありません。');
          break;
        default:
          setErrorMessage(`${error}`);
          break;
      }

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
      <Header />
      <div className='pt-36 min-h-screen dark:bg-dark dark:text-gray-300'>
        <div className='card bg-white shadow-2xl w-96 p-10 m-auto mt-10 dark:bg-gray-700'>
          <div className='form-control'>
            <div className='mb-6'>
              <h1 className='text-xl font-bold text-center'>Sign In</h1>
            </div>
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
            <div className='m-1 p-2'>
              <div className='flex border-b border-primary'>
                <label className='label'>
                  <LockIcon classes='h-6 w-6 text-primary' />
                </label>
                <input
                  name='password'
                  type={isMasked ? 'password' : 'text'}
                  placeholder='パスワード'
                  className='bg-white ml-1 p-2 dark:bg-gray-700'
                  value={password}
                  onChange={handleInputChange}
                />
                {isMasked ? (
                  <div onClick={() => setIsMasked(false)}>
                    <EyeOffIcon classes='m-2 text-secondary' />
                  </div>
                ) : (
                  <div onClick={() => setIsMasked(true)}>
                    <EyeIcon classes='m-2' />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='mt-5 mx-auto'>
            <Button size='large' label='sign in' onClick={signIn} />
          </div>
          <div className='mt-10'>
            パスワードをお忘れですか？{' '}
            <Link href='/auth/reset-password'>
              <a className='text-secondary hover:underline'>再設定</a>
            </Link>
          </div>
        </div>
        <div className='mt-10 pb-10 text-center'>
          <p>まだアカウントをお持ちではありませんか？</p>
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

export default SignIn;
