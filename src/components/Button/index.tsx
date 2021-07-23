import React from 'react';

import { ButtonProps } from './Button';

export const Button: React.FunctionComponent<ButtonProps> = ({
  bgColor = 'bg-primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  let sizeClasses;
  switch (size) {
    case 'small':
      sizeClasses = 'py-1 px-4 text-xs';
      break;
    case 'medium':
      sizeClasses = 'py-1 px-5 text-base';
      break;
    case 'large':
      sizeClasses = 'py-1 px-14 text-base';
      break;
  }

  return (
    <button
      type='button'
      className={`${bgColor} ${sizeClasses} text-white hover:bg-opacity-70 shadow-md rounded-3xl border border-gray-200`}
      {...props}
    >
      {label}
    </button>
  );
};
