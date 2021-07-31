import React from 'react';

import type { ButtonProps } from './Button';

const SIZES = {
  small: 'px-7 text-xs',
  medium: 'px-10 text-base',
  large: 'px-14 text-base',
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
