import React from 'react';
import { PlusIcon, SearchIcon } from '../icons';

export const SearchBox: React.FunctionComponent = () => (
  <div className='m-1 p-1.5 pr-4 max-w-sm mx-auto text-gray-500 border border-gray-200 rounded-md'>
    <SearchIcon classes='h-5 w-5 mt-0.5 text-gray-500' />
    <span className='ml-5 text-sm'>検索条件を設定</span>
    <span className='float-right'>
      <PlusIcon classes='h-6 w-6 text-gray-500' />
    </span>
  </div>
);
