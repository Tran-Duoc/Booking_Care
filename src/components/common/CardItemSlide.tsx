import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ICardItemSliderProps {
  imagePath: string;
  title: string;
  className?: ClassValue;
  href: string;
}

const CardItemSlide = ({
  href,
  className,
  imagePath,
  title,
}: ICardItemSliderProps) => {
  return (
    <Link
      href={href}
      className={cn('flex flex-1  flex-col h-full ', className)}
    >
      <div className=' relative w-full h-full rounded-2xl '>
        <Image
          src={imagePath}
          alt={title}
          fill
          className='bg-cover object-contain px-5 pt-4'
          loading='lazy'
        />
      </div>
      <h3 className='text-xl text-center font-medium  mt-2 p-2'>{title}</h3>
    </Link>
  );
};

export default CardItemSlide;
