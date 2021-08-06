import React from 'react';

import { filteringOrNot, largeAreas, order } from '../../../data';
import { Button } from '../../Button';
import { CloseIcon } from '../../icons';

import { FilteringInput } from './FilteringInput';
import { FilteringSelect } from './FilteringSelect';

export const SearchForm: React.FC = () => (
  <div className='flex flex-col justify-center max-w-lg w-full bg-white p-10'>
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
          <FilteringSelect label='都道府県' name='prefecture' data={largeAreas} />
        </div>
        <div className='m-3'>
          <FilteringInput label='キーワード' name='keyword' placeholder='店名、住所、駅名など' />
        </div>
        <div className='m-3'>
          <FilteringSelect label='Wifi' name='wifi' data={filteringOrNot} />
        </div>
        <div className='m-3'>
          <FilteringSelect label='個室' name='private_room' data={filteringOrNot} />
        </div>
        <div className='m-3'>
          <FilteringSelect label='禁煙席' name='no_smoking' data={filteringOrNot} />
        </div>
        <div className='m-3'>
          <FilteringSelect label='駐車場' name='parking' data={filteringOrNot} />
        </div>
        <div className='m-3'>
          <FilteringSelect label='ペット' name='pet' data={filteringOrNot} />
        </div>
        <div className='m-3'>
          <FilteringSelect label='カード決済' name='card' data={filteringOrNot} />
        </div>
        <div className='m-3'>
          <FilteringSelect label='並び順' name='order' data={order} />
        </div>
      </div>
      <div className='flex justify-between max-w-xs m-auto'>
        <Button label='リセット' btnColor='btn-accent' size='small' />
        <Button label='検索' size='large' />
      </div>
    </div>
  </div>
);
