import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Button } from '../../components';
import { ErrorAlert } from '../../components/Alerts';
import { ArrowLeftIcon, LockIcon, MailIcon, MessageIcon, UserIcon } from '../../components/icons';

const SignUp: NextPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState();
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const { name, value } = target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'code':
        setCode(value);
        break;
    }
  };

  const isValidUsername = (): boolean => {
    if (username.length < 3 || username.length > 30) {
      setErrorMessage('usernameは3文字以上, 30文字以下にしてください。');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  const isValidPassword = (): boolean => {
    const regexPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/;
    if (!regexPassword.test(password)) {
      setErrorMessage('passwordには大文字・小文字の英字と数字を含めてください。');
      return false;
    } else if (password.length < 12 || password.length > 50) {
      setErrorMessage('passwordは12文字以上, 50文字以下にしてください。');
      return false;
    } else if (password !== confirmPassword) {
      setErrorMessage('passwordとconfirm passwordが一致していません。');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  const signUp = async (): Promise<void> => {
    try {
      if (isValidUsername() && isValidPassword()) {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
          },
        });
        setIsError(false);
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      switch (error.name) {
        case 'UsernameExistsException':
          setErrorMessage('すでに登録済みのユーザー名のため使えません。');
          break;
        default:
          setErrorMessage(`${error}`);
          break;
      }

      setIsError(true);
    }
  };

  const confirmSignUp = async (): Promise<void> => {
    try {
      await Auth.confirmSignUp(username, code);
      await Auth.signIn({ username, password });
      router.push('/user-profile');
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
        setUser(currentUser);
      } catch (error) {
        console.log(error);
      }
    };
    init();

    if (user) {
      router.push('/user-profile');
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      {isSubmitted ? (
        <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10'>
          <div className='form-control'>
            <div className='flex m-1 p-2'>
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
            <div className='flex m-1 mb-10 p-2'>
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
          <Button size='large' label='activate account' onClick={confirmSignUp} />
        </div>
      ) : (
        <>
          <div className='card bg-white shadow-2xl w-96 p-10 m-auto sm:mt-10'>
            <div className='form-control'>
              <div className='mb-20'>
                <Link href='/'>
                  <a>
                    <ArrowLeftIcon classes='h-5 w-5' />
                  </a>
                </Link>
              </div>
              <div className='flex m-1 p-2'>
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
              <div className='flex m-1 p-2'>
                <label className='label'>
                  <MailIcon classes='h-6 w-6 text-primary' />
                </label>
                <input
                  name='email'
                  type='email'
                  placeholder='user@email.com'
                  className='bg-white ml-1 p-2'
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex m-1 p-2'>
                <label className='label'>
                  <LockIcon classes='h-6 w-6 text-primary' />
                </label>
                <input
                  name='password'
                  type='password'
                  placeholder='password'
                  className='bg-white ml-1 p-2'
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex m-1 mb-10 p-2'>
                <label className='label'>
                  <LockIcon classes='h-6 w-6 text-primary' />
                </label>
                <input
                  name='confirmPassword'
                  type='password'
                  placeholder='confirm password'
                  className='bg-white ml-1 p-2'
                  value={confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <Button size='large' label='create user' onClick={signUp} />
          </div>
          <div className='mt-10 text-center'>
            <p>Already have an account?</p>
            <div className='mt-2'>
              <Link href='/sign-in'>
                <a>
                  <Button btnColor='btn-secondary' size='medium' label='sign in' />
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUp;
