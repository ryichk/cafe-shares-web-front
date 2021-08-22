import React from 'react';

import { SearchConditionSettingToggle } from './SearchConditionSettingToggle';
import { SearchForm, SearchFormProps } from './SearchForm';

export const SearchModal: React.FC<SearchFormProps> = ({ setSearchParams }) => (
  <>
    <label htmlFor='search-form'>
      <SearchConditionSettingToggle />
    </label>
    <input type='checkbox' id='search-form' className='modal-toggle' />
    <div id='search-form' className='modal'>
      <SearchForm setSearchParams={setSearchParams} />
    </div>
  </>
);
