import { VFC } from 'react';

export const Footer: VFC = () => (
  <footer className='flex justify-center p-5 bg-base-content text-white'>
    <p>
      © 2021{' '}
      <a href='https://github.com/ryichk' className='link'>
        ryichk
      </a>
    </p>
  </footer>
);
