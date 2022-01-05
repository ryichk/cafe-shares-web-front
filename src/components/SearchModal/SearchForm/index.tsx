import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { thereOrNot, whetherPossible, largeAreas, sortOrderTypes } from '../../../data';
import { CloseIcon } from '../../../icons';
import { convertQueryStringToJSON } from '../../../lib/convert-querystring-to-json';
import * as gtag from '../../../lib/gtag';
import { Button } from '../../Button';

import { FilteringInput } from './FilteringInput';
import { FilteringSelect } from './FilteringSelect';

export const SearchForm: React.FC = () => {
  const router = useRouter();
  const { query } = router.query;
  const params = query
    ? convertQueryStringToJSON(query as string)
    : {
        largeArea: 'Z011',
        keyword: '',
        wifi: '0',
        privateRoom: '0',
        noSmoking: '0',
        parking: '0',
        pet: '0',
        card: '0',
        order: '4',
      };
  const [largeArea, setLargeArea] = useState<string>(params.largeArea);
  const [keyword, setKeyword] = useState<string>(params.keyword);
  const [wifi, setWifi] = useState<string>(params.wifi);
  const [privateRoom, setPrivateRoom] = useState<string>(params.privateRoom);
  const [noSmoking, setNoSmoking] = useState<string>(params.noSmoking);
  const [parking, setParking] = useState<string>(params.parking);
  const [pet, setPet] = useState<string>(params.pet);
  const [card, setCard] = useState<string>(params.card);
  const [sortOrder, setSortOrder] = useState<string>(params.order);

  const closeSearchForm = () => {
    const modalToggle: HTMLInputElement = document.getElementById(
      'search-form',
    ) as HTMLInputElement;
    modalToggle.checked = false;
  };

  const handleSearch = () => {
    const searchParams = {
      largeArea,
      keyword,
      wifi,
      privateRoom,
      noSmoking,
      parking,
      pet,
      card,
      start: '1',
      order: sortOrder,
    };
    const query = new URLSearchParams(searchParams);
    router.push(`/search/${query}`);

    closeSearchForm();
    gtag.event({
      action: 'search_cafe',
      category: 'Cafe Search',
      label: `${
        largeArea
          ? `large_area: ${largeAreas.filter((area) => area.code === largeArea)[0].name}, `
          : ''
      }${keyword ? `keyword: ${keyword}, ` : ''}${Number(wifi) ? 'wifi, ' : ''}${
        Number(privateRoom) ? 'private_room, ' : ''
      }${Number(noSmoking) ? 'no_smoking, ' : ''}${Number(parking) ? 'parking, ' : ''}${
        Number(pet) ? 'pet, ' : ''
      }${Number(card) ? 'card, ' : ''}sort_order: ${
        sortOrderTypes.filter((order) => order.code === sortOrder)[0].name
      }`,
    });
  };

  const handleResetSearchParams = () => {
    setLargeArea('Z011');
    setKeyword('');
    setWifi('0');
    setPrivateRoom('0');
    setNoSmoking('0');
    setParking('0');
    setPet('0');
    setCard('0');
    setSortOrder('4');
  };

  return (
    <div className='modal-box flex flex-col justify-center max-w-lg h-full sm:h-3/4 w-full bg-white pt-20 xs:p-10 overflow-y-scroll'>
      <div className='max-w-sm w-full m-auto'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>検索条件</h2>
          <div className='modal-action mt-0'>
            <label htmlFor='search-form'>
              <CloseIcon />
            </label>
          </div>
        </div>
        <div className='flex flex-col my-4'>
          <div className='m-3'>
            <FilteringSelect
              label='都道府県'
              name='large_area'
              data={largeAreas}
              state={largeArea}
              setState={setLargeArea}
            />
          </div>
          <div className='m-3'>
            <FilteringInput
              label='キーワード'
              name='keyword'
              placeholder='店名、住所、駅名など'
              state={keyword}
              setState={setKeyword}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='Wifi'
              name='wifi'
              data={thereOrNot}
              state={wifi}
              setState={setWifi}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='個室'
              name='private_room'
              data={thereOrNot}
              state={privateRoom}
              setState={setPrivateRoom}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='禁煙席'
              name='no_smoking'
              data={thereOrNot}
              state={noSmoking}
              setState={setNoSmoking}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='駐車場'
              name='parking'
              data={thereOrNot}
              state={parking}
              setState={setParking}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='ペット'
              name='pet'
              data={whetherPossible}
              state={pet}
              setState={setPet}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='カード決済'
              name='card'
              data={whetherPossible}
              state={card}
              setState={setCard}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='並び順'
              name='order'
              data={sortOrderTypes}
              state={sortOrder}
              setState={setSortOrder}
            />
          </div>
        </div>
        <div className='flex justify-between max-w-xs m-auto'>
          <Button
            label='リセット'
            btnColor='btn-accent'
            size='small'
            onClick={handleResetSearchParams}
          />
          <Button label='検索' size='large' onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};
