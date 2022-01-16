import React from 'react';

import { CarouselProps } from './Carousel';

export const Carousel: React.FC<CarouselProps> = ({ post }) => {
  return (
    <>
      <div className='w-ful carousel'>
        {post.pictures.map((picture, pictureIndex) => (
          <div
            key={`${post.id}-slide${pictureIndex}`}
            id={`${post.id}-slide${pictureIndex}`}
            className='relative h-56 w-full carousel-item'
            style={{
              background: `no-repeat center / cover url(${picture})`,
            }}
          >
            <div className='absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2'>
              {pictureIndex ? (
                <a
                  href={`#${post.id}-slide${pictureIndex - 1}`}
                  className='btn btn-circle btn-xs text-white opacity-40'
                >
                  ❮
                </a>
              ) : (
                <a></a>
              )}
              {pictureIndex + 1 === post.pictures.length || post.pictures.length === 1 ? (
                <a></a>
              ) : (
                <a
                  href={`#${post.id}-slide${pictureIndex + 1}`}
                  className='btn btn-circle btn-xs text-white opacity-40'
                >
                  ❯
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center w-full my-3'>
        {post.pictures.map((picture, pictureIndex) => (
          <a
            key={`${post.id}-badge${pictureIndex}`}
            href={`#${post.id}-slide${pictureIndex}`}
            id={`${post.id}-badge${pictureIndex}`}
            className={`text-gray-300 text-md font-bold ${
              pictureIndex === 0 ? 'text-primary' : ''
            }`}
          >
            ・
          </a>
        ))}
      </div>
    </>
  );
};
