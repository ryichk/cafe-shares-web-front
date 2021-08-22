import React from 'react';

import { InputProps } from '../../.../../../../interfaces';

export const FilteringInput: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  state,
  setState,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    setState(target.value);
  };

  return (
    <div className='flex flex-row justify-between items-center bg-white border-b-2 form-control'>
      <label htmlFor={name} className='text-base sm:text-lg font-semibold'>
        {label}
      </label>
      <input
        type='text'
        placeholder={placeholder}
        id={name}
        className='p-1 text-xs sm:text-lg'
        value={state}
        onChange={handleChange}
      />
    </div>
  );
};
