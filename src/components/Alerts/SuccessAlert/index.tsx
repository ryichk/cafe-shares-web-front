import React, { useContext } from 'react';

import { AlertContext } from '../../../contexts';
import { CloseIcon } from '../../../icons';
import { AlertProps } from '../Alert';

export const SuccessAlert: React.FC<AlertProps> = ({ message }) => {
  const { setIsSuccess } = useContext(AlertContext);

  return (
    <div className='fixed w-full alert bg-green-100 text-success shadow-md z-50'>
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
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <label>{message}</label>
        <div className='mx-2' onClick={() => setIsSuccess(false)}>
          <CloseIcon classes='fixed right-2' />
        </div>
      </div>
    </div>
  );
};
