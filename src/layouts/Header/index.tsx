import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

import cafeSharesImg from '../../assets/images/cafe-shares.png';
import {
  BellIcon,
  CogIcon,
  HomeIcon,
  LocationIcon,
  PhotoIcon,
  SignInIcon,
  TemplateIcon,
} from '../../icons';

export const Header: VFC = () => (
  <header>
    <div className='flex relative max-w-md sm:mx-auto pt-8 pl-4 sm:pl-9 pb-5'>
      <div className='w-48'>
        <Link href='/'>
          <a>
            <Image src={cafeSharesImg} alt='Cafe Shares' />
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
            <Link href='/auth/sign-in'>
              <a>
                <SignInIcon classes='h-5 sm:h-7 mr-1' />
                SIGN IN
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
          <li>
            <Link href='/'>
              <a>
                <HomeIcon classes='h-5 sm:h-7 mr-1' />
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <TemplateIcon classes='h-5 sm:h-7 mr-1' />
                POSTS
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <PhotoIcon classes='h-5 sm:h-7 mr-1' />
                PHOTOS
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
          <li>
            <Link href='/'>
              <a>
                <CogIcon classes='h-5 sm:h-7 mr-1' />
                SETTINGS
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
