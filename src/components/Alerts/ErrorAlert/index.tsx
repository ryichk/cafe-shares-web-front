import React, { useContext } from 'react';

import { AlertContext } from '../../../contexts';
import { CloseIcon } from '../../../icons';
import { AlertProps } from '../Alert';

export const ErrorAlert: React.FC<AlertProps> = ({ message }) => {
  const { setIsError } = useContext(AlertContext);

  return (
    <div className='fixed w-full alert bg-red-100 text-error shadow-md z-50'>
      <div className='flex-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='w-6 h-6 mx-2 stroke-current'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
          ></path>
        </svg>
        <label>{message}</label>
        <div
          className='mx-2'
          onClick={() => {
            setIsError(false);
          }}
        >
          <CloseIcon classes='fixed right-2' />
        </div>
      </div>
    </div>
  );
};
