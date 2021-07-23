import Image from 'next/image';
import React from 'react';

import { HeartIcon, LocationIcon } from '../icons';
import type { CardProps } from './Card';

export const Card: React.FC<CardProps> = ({ imageUrl, name, description, area }) => (
  <div className='p-2 max-w-sm mx-auto bg-white border border-gray-400 rounded-lg shadow-lg flex items-center space-x-4'>
    <div className='flex-shrink-0'>
      <Image src={imageUrl} width={140} height={100} alt={name} className='rounded-lg' />
    </div>
    <div className='flex-grow'>
      <div className='text-xl font-semibold tracking-wide text-gray-700'>{name}</div>
      <p className='text-xs text-gray-500'>{description}</p>
      <div>
        <LocationIcon classes={'h-4 w-4 mt-1 mr-1 text-gray-500'} />
        <span className='text-xs text-gray-500'>{area}</span>
        <HeartIcon classes={'h-5 w-5 m-1 text-gray-500 float-right'} />
      </div>
    </div>
  </div>
);
