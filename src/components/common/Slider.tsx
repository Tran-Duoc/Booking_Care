import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { SpecializedType } from '../sections/Specialized';
import CardItemSlide from './CardItemSlide';

const Slider = ({ data }: { data: SpecializedType[] }) => {
  return (
    <div className='md:h-[40vh] h-[60vh] w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className='w-full h-full mt-10 p-20'
      >
        children
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <CardItemSlide
              className={'border-2 rounded-2xl'}
              imagePath={item.imagePath}
              href={item.href}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
