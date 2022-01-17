import { Auth } from 'aws-amplify';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState, VFC } from 'react';
import { useTheme } from 'next-themes';

import cafeSharesImg from '../../assets/images/cafe-shares.png';
import cafeSharesImgForDarkMode from '../../assets/images/cafe-shares-for-dark.png';
import {
  BellIcon,
  CogIcon,
  HomeIcon,
  LocationIcon,
  MoonIcon,
  PhotoIcon,
  SignInIcon,
  SignOutIcon,
  SunIcon,
  UserIcon,
} from '../../icons';
import { ErrorAlert, SearchModal } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';

export const Header: VFC = () => {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      setIsError(false);
      setErrorMessage('');
    } catch (error) {
      setIsError(true);
      setErrorMessage(`${error}`);
    }
  };

  return (
    <>
      {isError ? <ErrorAlert message={errorMessage} /> : <></>}
      <header className='fixed bg-base-100 shadow-md pb-3 w-full z-40 dark:bg-dark dark:shadow-gray-800'>
        <div className='flex relative sm:mx-auto pt-8 pl-4 pb-5'>
          <div className='w-48'>
            <Link href='/'>
              <a>
                {theme === 'light' ? (
                  <Image src={cafeSharesImg} alt='Cafe Shares' />
                ) : (
                  <Image src={cafeSharesImgForDarkMode} alt='Cafe Shares' />
                )}
              </a>
            </Link>
          </div>
          <div className='absolute top-5 right-3 xs:right-40 dropdown dropdown-end'>
            <button tabIndex={0} className='btn btn-square btn-ghost drawer-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={0}
              className='menu p-4 w-max bg-base-content dropdown-content rounded-box shadow-2xl text-white'
            >
              <li>
                <div className='flex mx-auto mb-2'>
                  <label htmlFor='theme-change-toggle'>
                    <SunIcon
                      classes={`h-6 mr-1 ${mounted && theme === 'light' && 'text-secondary'}`}
                    />
                  </label>
                  <input
                    id='theme-change-toggle'
                    type='checkbox'
                    className='toggle h-6'
                    checked={theme === 'light' ? false : true}
                    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  />
                  <label htmlFor='theme-change-toggle'>
                    <MoonIcon
                      classes={`h-6 ml-1 ${mounted && theme === 'dark' && 'text-yellow-100'}`}
                    />
                  </label>
                </div>
              </li>
              {user ? (
                <>
                  <li className={router.pathname === '/auth/user-profile' && 'text-primary'}>
                    <Link href='/auth/user-profile'>
                      <a>
                        <UserIcon classes='h-5 sm:h-7 mr-1' />
                        PROFILE
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>
                        <BellIcon classes='h-5 sm:h-7 mr-1' />
                        NOTIFICATIONS
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                <li className={router.pathname === '/auth/sign-in' && 'text-primary'}>
                  <Link href='/auth/sign-in'>
                    <a>
                      <SignInIcon classes='h-5 sm:h-7 mr-1' />
                      SIGN IN
                    </a>
                  </Link>
                </li>
              )}
              <li className={router.pathname === '/' && 'text-primary'}>
                <Link href='/'>
                  <a>
                    <HomeIcon classes='h-5 sm:h-7 mr-1' />
                    CAFES
                  </a>
                </Link>
              </li>
              <li className={router.pathname === '/posts' && 'text-primary'}>
                <Link href='/posts'>
                  <a>
                    <PhotoIcon classes='h-5 sm:h-7 mr-1' />
                    POSTS
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <LocationIcon classes='h-5 sm:h-7 mr-1' />
                    PLACES
                  </a>
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link href='/'>
                      <a>
                        <CogIcon classes='h-5 sm:h-7 mr-1' />
                        SETTINGS
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a onClick={signOut}>
                      <SignOutIcon classes='h-5 sm:h-7 mr-1' />
                      SIGN OUT
                    </a>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <div className='sm:absolute sm:top-8 sm:left-56 mx-4'>
          <SearchModal />
        </div>
      </header>
    </>
  );
};
