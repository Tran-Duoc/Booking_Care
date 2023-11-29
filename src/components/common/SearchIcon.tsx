import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';

const SearchIcon = ({ className }: { className?: ClassValue }) => {
  return (
    <div className={cn('w-8 h-8 relative', className)}>
      <div className='w-full h-full border-[3px]  border-[#45C3D2] rounded-full absolute p-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          fill='#969495'
          preserveAspectRatio='none'
          viewBox='0 0 12 12'
        >
          <path
            fill='#45C3D2'
            d='m11.067 12-4.2-4.2a4.063 4.063 0 0 1-2.533.867c-1.212 0-2.237-.42-3.076-1.259S0 5.544 0 4.333c0-1.21.42-2.236 1.258-3.075C2.098.42 3.122 0 4.333 0S6.57.42 7.408 1.258c.84.84 1.259 1.864 1.259 3.075A4.063 4.063 0 0 1 7.8 6.867l4.2 4.2-.933.933ZM4.333 7.333c.834 0 1.542-.291 2.125-.875a2.893 2.893 0 0 0 .875-2.125c0-.833-.291-1.541-.875-2.125a2.893 2.893 0 0 0-2.125-.875c-.833 0-1.541.292-2.125.875a2.893 2.893 0 0 0-.875 2.125c0 .834.292 1.542.875 2.125a2.893 2.893 0 0 0 2.125.875Z'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchIcon;
