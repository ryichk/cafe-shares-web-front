import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
/* eslint-enable import/no-unresolved */
import { CarouselProps } from './Carousel';

export const Carousel: React.FC<CarouselProps> = ({ post }) => {
  SwiperCore.use([Pagination, Navigation]);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        className='w-full'
      >
        {post.pictures.map((picture, pictureIndex) => (
          <SwiperSlide key={`${post.id}-slide${pictureIndex}`}>
            <div
              className='relative h-56 w-full'
              style={{
                background: `no-repeat center / cover url(${picture})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
