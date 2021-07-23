import React from 'react';
import { PlusIcon, SearchIcon } from '../icons';

export const SearchBox: React.FunctionComponent = () => (
  <div className='m-1 p-1.5 pr-4 text-gray-500 border border-gray-200 rounded-md'>
    <SearchIcon />
    <span className='ml-5 text-sm'>検索条件を設定</span>
    <span className='float-right'>
      <PlusIcon />
    </span>
  </div>
);
