import React from 'react';

import type { ButtonProps } from './Button';

const SIZES = {
  small: 'py-1 px-4 text-xs',
  medium: 'py-1 px-5 text-base',
  large: 'py-1 px-14 text-base',
};

export const Button: React.FC<ButtonProps> = ({
  bgColor = 'bg-primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => (
  <button
    type='button'
    className={`${bgColor} ${SIZES[size]} text-white hover:bg-opacity-70 shadow-md rounded-3xl border border-gray-200`}
    {...props}
  >
    {label}
  </button>
);
