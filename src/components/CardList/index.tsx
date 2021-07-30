import React from 'react';

import { Card } from '../Card';
import { LocationIcon, HeartIcon } from '../icons';
import { CardListProps } from './CardList';

export const CardList: React.FC<CardListProps> = ({ loading, cafes }) => {
  const LoadingCard = (
    <div className='bg-white my-6 p-2 max-w-sm mx-auto rounded-lg shadow-md flex items-center space-x-4'>
      <div className='flex-shrink-0 w-28 h-28 grid text-gray-400 border border-gray-300 rounded-lg'>
        <div className='place-self-center'>Loading...</div>
      </div>
      <div className='flex-grow'>
        <div className='text-xl font-semibold tracking-wide text-gray-700'>......</div>
        <p className='text-xs text-gray-500'>......</p>
        <div>
          <LocationIcon classes={'h-4 w-4 mt-1 mr-1 text-gray-500'} />
          <span className='text-xs text-gray-500'>......</span>
          <HeartIcon classes={'h-5 w-5 m-1 text-gray-500 float-right'} />
        </div>
      </div>
    </div>
  );
  if (loading) {
    return (
      <>
        {LoadingCard}
        {LoadingCard}
        {LoadingCard}
        {LoadingCard}
        {LoadingCard}
      </>
    );
  }

  return (
    <div>
      {cafes.map((cafe, index: number) => (
        <div className='my-6' key={String(index)}>
          <Card
            name={cafe.name}
            imageURL={cafe.photo.pc.l}
            catchCopy={cafe.catch}
            area={`${cafe.large_area.name} ${cafe.middle_area.name}`}
          />
        </div>
      ))}
    </div>
  );
};
