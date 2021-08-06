import React from 'react';

import { SearchConditionSettingToggle } from './SearchConditionSettingToggle';
import { SearchForm } from './SearchForm';

export const SearchModal: React.FC = () => (
  <>
    <label htmlFor='search-form'>
      <SearchConditionSettingToggle />
    </label>
    <input type='checkbox' id='search-form' className='modal-toggle' />
    <div id='search-form' className='modal pb-20'>
      <SearchForm />
    </div>
  </>
);
