import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

import cafeSharesImg from '../../assets/images/cafe-shares.png';
import { SignInIcon } from '../../icons';

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
      <div className='absolute top-8 right-3 xs:right-40'>
        <Link href='/auth/sign-up'>
          <a>
            <SignInIcon classes='h-8 sm:h-10' />
          </a>
        </Link>
      </div>
    </div>
  </header>
);
