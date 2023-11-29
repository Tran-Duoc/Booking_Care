'use client';
import React from 'react';
import Wrapper from '../common/Wrapper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

type SliderItemType = {
  imagePath: string;
  href: string;
};

const SliderItem: SliderItemType[] = [
  {
    imagePath: '/images/group-12314.png',
    href: 'benh-nhan-thuong-hoi/ve-bookingcare-f1',
  },
  {
    imagePath: '/images/dat-lich-cham-soc-wecare247.png',
    href: '/',
  },
  {
    imagePath: '/images/dat-lich-kham-bookingcare-pharmacity.jpg',
    href: '/',
  },
  {
    imagePath: '/images/med247.png',
    href: '/',
  },
];

const HeroSlide = () => {
  return (
    <Wrapper className='h-[65vh] rounded-3xl  mb-5 mt-2'>
      <Swiper
        dir='ltr'
        loop={true}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='w-full h-full rounded-3xl duration-300 '
      >
        {SliderItem.map((item) => (
          <SwiperSlide
            key={item.href}
            className='relative w-full h-full  rounded-3xl  '
          >
            <Link href={item.href}>
              <Image src={item.imagePath} alt={item.href} fill loading='lazy' />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default HeroSlide;
