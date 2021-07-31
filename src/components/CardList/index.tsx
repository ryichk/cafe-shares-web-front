import React from 'react';

import { Card } from '../Card';
import { LocationIcon, HeartIcon } from '../icons';
import { CardListProps } from './CardList';

export const CardList: React.FC<CardListProps> = ({ loading, cafes }) => {
  return (
    <>
      {cafes.map((cafe, index: number) => (
        <div className='my-6' key={String(index)}>
          <Card
            loading={loading}
            name={cafe.name}
            imageURL={cafe.photo.pc.l}
            catchCopy={cafe.catch}
            area={`${cafe.large_area.name} ${cafe.middle_area.name}`}
          />
        </div>
      ))}
    </>
  );
};
