import React from 'react';

import type { IconProps } from '../icon';

export const CheckIcon: React.FC<IconProps> = ({ classes }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={classes}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
  </svg>
);
