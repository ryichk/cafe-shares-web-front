import Link from 'next/link';
import React from 'react';

import { LocationIcon } from '../../../icons';
import type { CardProps } from './Card';

export const Card: React.FC<CardProps> = ({
  loading,
  genre,
  area,
  id,
  imageURL,
  name,
  catchCopy,
}) => {
  {
    return loading ? (
      <div className='card bg-white h-96 w-80 my-6 p-2 mx-auto rounded-2xl shadow-md grid flex items-center space-x-4 dark:bg-gray-700'>
        <div className='text-gray-300 text-center text-2xl'>Loading...</div>
      </div>
    ) : (
      <Link href={`/cafe/${id}`} passHref>
        <div className='card bg-white max-w-xs shadow-md w-screen min-h-full dark:bg-gray-700'>
          <div
            className='h-52'
            style={{
              background: `no-repeat center / cover url(${imageURL})`,
            }}
          />
          <div className='max-w-md card-body p-4 lg:p-3'>
            <h2 className='card-title dark:text-gray-300'>{name}</h2>
            <p className='text-sm dark:text-gray-300'>{catchCopy}</p>
            <p className='text-xs mt-4 text-gray-500 dark:text-gray-400'>{genre}</p>
            <div className='mt-2'>
              <LocationIcon classes={'inline h-4 w-4 mr-1 text-gray-500 dark:text-gray-400'} />
              <p className='inline-block my-0 text-xs text-gray-500 dark:text-gray-400'>{area}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};
