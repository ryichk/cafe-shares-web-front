import React from 'react';
import { SelectProps } from '../../../../interfaces';

export const FilteringSelect: React.FC<SelectProps> = ({ label, name, data }) => (
  <div className='flex justify-between items-center bg-white border-b-2'>
    <label htmlFor={name} className='text-lg font-semibold'>
      {label}
    </label>
    <select name={name} id={name} className='bg-white font-semibold'>
      {data.map((object: { name: string; code: string }) => (
        <option key={object.code} value={object.code}>
          {object.name}
        </option>
      ))}
    </select>
  </div>
);
