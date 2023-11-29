'use client';
import React from 'react';
import Wrapper from '../common/Wrapper';
import ContentSection from '../common/ContentSection';
import Slider from '../common/Slider';

export type SpecializedType = {
  imagePath: string;
  title: string;
  href: string;
};

const Specialized = () => {
  const SpecializedData: SpecializedType[] = [
    {
      imagePath: '/images/co-xuong-khop.jpg',
      title: 'Cơ xương khớp',
      href: 'co-xuong-khop',
    },
    {
      imagePath: '/images/than-kinh.jpg',
      title: 'Thần kinh',
      href: 'than-kinh',
    },
    {
      imagePath: '/images/benh-viem-gan.jpg',
      title: 'Tiêu hóa',
      href: 'tieu-hoa',
    },
    {
      imagePath: '/images/tim-mach.jpg',
      title: 'Tim mạch',
      href: 'tim-mach',
    },
    {
      imagePath: '/images/tai-mui-hong.jpg',
      title: 'Tai Mũi Họng',
      href: 'tai-mui-hong',
    },
    {
      imagePath: '/images/cot-song.jpg',
      title: 'Cột sống',
      href: 'cot-song',
    },
  ];
  return (
    <Wrapper className='my-10'>
      <ContentSection title='Chuyên khoa' moreInfo>
        <Slider data={SpecializedData} />
      </ContentSection>
    </Wrapper>
  );
};

export default Specialized;
