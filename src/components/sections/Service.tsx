'use client';

import React from 'react';
import ContentSection from '../common/ContentSection';
import ServiceItem from '../common/ServiceItem';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export type ServiceItemType = {
  imageIcon: string;
  name: string;
  href: string;
};

const NUM_SERVICE_ITEM = 6;
const Service = () => {
  const serviceItem: ServiceItemType[] = [
    {
      imageIcon: '/images/iconkham-chuyen-khoa.png',
      name: 'Khám chuyên khoa',
      href: 'kham-chuyen-khoa',
    },
    {
      imageIcon: '/images/iconkham-tu-xa.png',
      name: 'Khám từ xa',
      href: 'kham-tu-xa',
    },
    {
      imageIcon: '/images/iconkham-tong-quan.png',
      name: 'Khám tổng quát',
      href: 'kham-tong-quat',
    },
    {
      imageIcon: '/images/iconxet-nghiem-y-hoc.png',
      name: 'Xét nghiệm y học',
      href: 'xet-nghiem-y-hoc',
    },
    {
      imageIcon: '/images/iconsuc-khoe-tinh-than.png',
      name: 'Sức khỏe tinh thần',
      href: 'suc-khoe-tinh-than',
    },
    {
      imageIcon: '/images/iconkham-nha-khoa.png',
      name: 'Khám nha khoa',
      href: 'kham-nha-khoa',
    },
    {
      imageIcon: '/images/icongoi-phau-thuat.png',
      name: 'Gói phẩu thuật',
      href: 'goi-phau-thuat',
    },
    {
      imageIcon: '/images/thiet-ke-chua-co-ten.png',
      name: 'Sống khỏe tiểu đường',
      href: 'song-khoe-tieu-duong',
    },
    {
      imageIcon: '/images/iconbai-test-suc-khoe2.png',
      name: 'Bài test sức khoẻ',
      href: 'bai-test-suc-khoe',
    },
    {
      imageIcon: '/images/near-home.png',
      name: 'Y tế gần bạn',
      href: 'y-te-gan-ban',
    },
  ];

  const [isMoreInfo, setIsMoreInfo] = useState<boolean>(false);
  const [numServiceItem, setNumServiceItem] =
    useState<number>(NUM_SERVICE_ITEM);
  const handleToggleMoreInfo = () => {
    setNumServiceItem((prevNum) =>
      prevNum === NUM_SERVICE_ITEM ? serviceItem.length : NUM_SERVICE_ITEM
    );
    setIsMoreInfo((prevState) => !prevState);
  };

  return (
    <ContentSection title='Dịch vụ toàn diện'>
      <aside className='grid grid-cols-2 gap-x-10 gap-y-5 my-10'>
        {serviceItem.slice(0, numServiceItem).map((item) => (
          <ServiceItem
            key={item.name}
            imageIcon={item.imageIcon}
            name={item.name}
            href={item.href}
          />
        ))}
      </aside>
      <div className='flex items-center justify-center my-5'>
        <span
          className='text-xl font-semibold text-[#45c3d2] flex items-center'
          onClick={handleToggleMoreInfo}
        >
          {isMoreInfo ? 'Ẩn bớt' : 'Xem thêm'}
          <ChevronDown
            className={cn('w-8 h-8 duration-500', {
              'rotate-180 ': isMoreInfo,
            })}
          />
        </span>
      </div>
    </ContentSection>
  );
};

export default Service;
