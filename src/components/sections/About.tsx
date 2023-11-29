import React from 'react';
import ContentSection from '../common/ContentSection';
import Link from 'next/link';
import Image from 'next/image';

type AboutType = {
  image: string;
  name: string;
  href: string;
};

const AboutItem: AboutType[] = [
  {
    image: '/images/chuyen-khoa.png',
    name: 'Chuyên khoa',
    href: 'danh-cho-ban',
  },
];

const About = () => {
  return (
    <ContentSection title='Dành cho bạn'>
      <div className='flex py-12'>
        {AboutItem.map((item) => (
          <Link
            href={`danh-sach/chuyen-khoa/${item.href}`}
            key={item.href}
            className='flex flex-col items-center'
          >
            <Image
              src={item.image}
              alt={item.name}
              width={230}
              height={230}
              className='rounded-full object-cover bg-cover'
            />
            <h3 className='text-xl mt-6 font-medium'>{item.name}</h3>
          </Link>
        ))}
      </div>
    </ContentSection>
  );
};

export default About;
