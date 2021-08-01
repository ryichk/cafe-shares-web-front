import Image from 'next/image';
import React from 'react';

import { CafeDetailModal } from '../CafeDetailModal';
import { LocationIcon } from '../icons';
import type { CardProps } from './Card';

export const Card: React.FC<CardProps> = ({
  loading,
  genre,
  area,
  id,
  imageURL,
  name,
  catchCopy,
  stationName,
  access,
  address,
  businessHours,
  closeDay,
  budget,
  card,
  capacity,
  wifi,
  parking,
  pet,
  cafeURL,
}) => {
  {
    return loading ? (
      <div className='card bg-white h-96 w-80 my-6 p-2 mx-auto rounded-2xl shadow-md grid flex items-center space-x-4'>
        <div className='text-gray-300 text-center text-2xl'>Loading...</div>
      </div>
    ) : (
      <>
        <label htmlFor={id}>
          <div className='card bg-white max-w-xs shadow-md w-screen min-h-full'>
            <figure className='p-3 pb-0'>
              <Image
                src={imageURL}
                width={388}
                height={240}
                alt={name}
                className='h-48 rounded-lg'
              />
            </figure>
            <div className='max-w-md card-body p-4 lg:p-3'>
              <h2 className='card-title'>{name}</h2>
              <p className='text-sm'>{catchCopy}</p>
              <p className='text-xs mt-4 text-gray-500'>{genre}</p>
              <div className='mt-2'>
                <LocationIcon classes={'inline h-4 w-4 mr-1 text-gray-500'} />
                <p className='inline-block my-0 text-xs text-gray-500'>{area}</p>
              </div>
            </div>
          </div>
        </label>
        <input type='checkbox' id={id} className='modal-toggle' />
        <CafeDetailModal
          id={id}
          imageURL={imageURL}
          name={name}
          catchCopy={catchCopy}
          stationName={stationName}
          access={access}
          address={address}
          businessHours={businessHours}
          closeDay={closeDay}
          budget={budget}
          card={card}
          capacity={capacity}
          wifi={wifi}
          parking={parking}
          pet={pet}
          cafeURL={cafeURL}
        />
      </>
    );
  }
};
