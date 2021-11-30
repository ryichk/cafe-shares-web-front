import React from 'react';

import { CafeInfo } from '../../interfaces';
import { Card } from './Card';
import { CardListProps } from './CardList';

export const CardList: React.FC<CardListProps> = ({ loading, cafes }) => {
  const genre = (cafe: CafeInfo): string => {
    const subGenre = cafe.sub_genre?.name ? ` / ${cafe.sub_genre.name}` : '';
    return `${cafe.genre.name}${subGenre}`;
  };

  return (
    <>
      {cafes.map((cafe, index: number) => (
        <div className='m-auto my-4 lg:m-4' key={String(index)}>
          <Card
            loading={loading}
            genre={genre(cafe)}
            area={`${cafe.large_area.name} ${cafe.middle_area.name}`}
            id={String(cafe.id)}
            imageURL={cafe.photo.pc.l}
            name={cafe.name}
            catchCopy={cafe.catch}
          />
        </div>
      ))}
    </>
  );
};
