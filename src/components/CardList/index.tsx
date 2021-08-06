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
            id={String(cafe.id)}
            name={cafe.name}
            imageURL={cafe.photo.pc.l}
            catchCopy={cafe.catch}
            genre={genre(cafe)}
            area={`${cafe.large_area.name} ${cafe.middle_area.name}`}
            address={cafe.address}
            stationName={cafe.station_name}
            access={cafe.access}
            capacity={cafe.capacity}
            cafeURL={cafe.urls.pc}
            businessHours={cafe.open}
            closeDay={cafe.close}
            wifi={cafe.wifi}
            parking={cafe.parking}
            pet={cafe.pet}
            card={cafe.card}
            budget={cafe.budget.average}
          />
        </div>
      ))}
    </>
  );
};
