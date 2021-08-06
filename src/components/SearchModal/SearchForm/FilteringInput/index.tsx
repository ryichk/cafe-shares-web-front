import React from 'react';

import { InputProps } from '../../.../../../../interfaces';

export const FilteringInput: React.FC<InputProps> = ({ label, name, placeholder }) => (
  <div className='flex flex-row justify-between items-center bg-white border-b-2 form-control'>
    <label htmlFor={name} className='text-lg font-semibold'>
      {label}
    </label>
    <input type='text' placeholder={placeholder} id={name} className='p-1' />
  </div>
);
