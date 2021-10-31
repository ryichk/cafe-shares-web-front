import React from 'react';

import type { IconProps } from './icon';

export const ArrowLeftIcon: React.FC<IconProps> = ({ classes }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={classes}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10 19l-7-7m0 0l7-7m-7 7h18'
    />
  </svg>
);
