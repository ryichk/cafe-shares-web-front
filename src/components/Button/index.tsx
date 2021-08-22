import React from 'react';

import type { ButtonProps } from './Button';

const SIZES = {
  small: 'px-4 sm:px-7 text-xs',
  medium: 'px-10 text-sm sm:text-base',
  large: 'px-12 sm:px-14 text-sm sm:text-base',
};

export const Button: React.FC<ButtonProps> = ({
  btnColor = 'btn-primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => (
  <button
    type='button'
    className={`${btnColor} ${SIZES[size]} btn shadow-md rounded-3xl`}
    {...props}
  >
    {label}
  </button>
);
