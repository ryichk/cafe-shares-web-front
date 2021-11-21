import React from 'react';
import type { IconProps } from './icon';

export const MailIcon: React.FC<IconProps> = ({ classes }) => (
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
      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    />
  </svg>
);
