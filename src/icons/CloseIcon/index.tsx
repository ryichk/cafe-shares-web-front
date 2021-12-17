import React from 'react';

import type { IconProps } from '../icon';

export const CloseIcon: React.FC<IconProps> = ({ classes }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    className={`inline-block w-6 h-6 stroke-current ${classes}`}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M6 18L18 6M6 6l12 12'
    ></path>
  </svg>
);
