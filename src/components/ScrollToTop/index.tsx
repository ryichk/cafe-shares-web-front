import { VFC, useEffect, useState } from 'react';

import { ChevronUp } from '../icons';

export const ScrollToTop: VFC = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <div className='btn btn-primary btn-circle btn-sm' onClick={scrollToTop}>
          <ChevronUp />
        </div>
      )}
    </>
  );
};
