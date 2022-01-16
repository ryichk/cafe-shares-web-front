import React from 'react';

import { SelectProps } from '../../../../interfaces';

export const FilteringSelect: React.FC<SelectProps> = ({ label, name, data, state, setState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) return;

    setState(target.value);
  };

  return (
    <div className='flex justify-between items-center bg-white border-b-2 dark:bg-gray-700'>
      <label htmlFor={name} className='text-base sm:text-lg font-semibold dark:bg-gray-700'>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className='bg-white text-sm sm:text-lg font-semibold dark:bg-gray-700'
        value={state}
        onChange={handleChange}
      >
        {data.map((object: { name: string; code: string }) => (
          <option key={object.code} value={object.code}>
            {object.name}
          </option>
        ))}
      </select>
    </div>
  );
};
