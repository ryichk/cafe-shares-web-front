import React, { useContext } from 'react';

import { AlertContext } from '../../../contexts';
import { CloseIcon, InfoIcon } from '../../../icons';
import { AlertProps } from '../Alert';

export const InfoAlert: React.FC<AlertProps> = ({ message }) => {
  const { setIsInfo } = useContext(AlertContext);

  return (
    <div className='fixed w-full alert bg-blue-100 text-info shadow-md z-50'>
      <div className='flex-1'>
        <InfoIcon />
        <label>{message}</label>
        <div
          className='mx-2'
          onClick={() => {
            setIsInfo(false);
          }}
        >
          <CloseIcon classes='fixed right-2' />
        </div>
      </div>
    </div>
  );
};
