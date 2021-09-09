import Image from 'next/image';
import React from 'react';

import * as gtag from '../../../lib/gtag';
import { LocationIcon } from '../../icons';
import { CafeDetail } from '../CafeDetail';
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
  const handleClick = () => {
    const modalToggle: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
    modalToggle.checked = !modalToggle.checked;

    if (modalToggle.checked) {
      gtag.event({
        action: 'click_cafe_card',
        category: 'Cafe Detail',
        label: name,
      });
    }
  };

  {
    return loading ? (
      <div className='card bg-white h-96 w-80 my-6 p-2 mx-auto rounded-2xl shadow-md grid flex items-center space-x-4'>
        <div className='text-gray-300 text-center text-2xl'>Loading...</div>
      </div>
    ) : (
      <>
        <div onClick={handleClick} className='card bg-white max-w-xs shadow-md w-screen min-h-full'>
          <figure className='p-3 pb-0'>
            <Image src={imageURL} width={388} height={240} alt={name} className='h-48 rounded-lg' />
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
        <input type='checkbox' id={id} className='modal-toggle' />
        <div id={id} className='modal overflow-scroll py-3'>
          <CafeDetail
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
        </div>
      </>
    );
  }
};
