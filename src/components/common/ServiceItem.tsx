import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ServiceItemType as ServiceItemProps } from '../sections/Service';

const ServiceItem = ({ imageIcon, name, href }: ServiceItemProps) => {
  return (
    <Link
      href={href}
      className='flex bg-[url("/images/background_item.png")] items-center pl-10 border-2 rounded-2xl py-5'
    >
      <Image src={imageIcon} className='' alt={name} width={50} height={50} />
      <h3 className='text-2xl font-semibold flex-1 ml-12'>{name}</h3>
    </Link>
  );
};

export default ServiceItem;
