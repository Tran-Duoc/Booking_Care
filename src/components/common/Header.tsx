'use client';
import React from 'react';

import Link from 'next/link';

import { useRandomPlaceholder } from '@/hooks/useRandomPlaceholder';

import { Search } from 'lucide-react';

import { Input } from '../ui/input';
import Wrapper from './Wrapper';
import Logo from './Logo';
import Support from './Support';
import SearchIcon from './SearchIcon';

type NavItemType = {
  name: string;
  href: string;
};

const navItem: NavItemType[] = [
  {
    name: 'Tại nhà',
    href: 'tai-nha',
  },
  {
    name: 'Tại viện',
    href: 'tai-vien',
  },
  {
    name: 'Sống khỏe',
    href: 'song-khoe',
  },
];

const texts = ['Tại nhà', 'Tại viện', 'Sống khỏe'];

const Header = () => {
  const placeholder = useRandomPlaceholder(texts, 2000);

  return (
    <header className='py-5'>
      <Wrapper className='flex items-center justify-between gap-16'>
        <div>
          <Logo />
        </div>

        <div className='flex-1 mr-auto hidden lg:block'>
          <nav className=' text-lg text-slate-900 gap-5 flex items-center'>
            {navItem.map((item, index) => (
              <Link href={`dich-vu/${item.href}`} key={index}>
                {item.name}
              </Link>
            ))}
            <Link
              href='dich-vu/tim-kiem'
              className='flex-[0.5_0.5_0%] relative'
            >
              <Input
                placeholder={placeholder}
                className='focus:border-none rounded-full w-full px-10'
              />
              <Search className='absolute top-1/2 -translate-y-1/2 left-0 p-1   ml-2 ' />
            </Link>
          </nav>
        </div>
        <div className='flex items-center gap-5'>
          <Link href='/' className='flex flex-col items-center justify-center'>
            <SearchIcon className='block lg:hidden' />
          </Link>
          <Link href='/' className='flex flex-col items-center justify-center'>
            <Support />
            <span className='hidden md:block text-base text-[#45c3d2] font-bold'>
              Hỗ trợ
            </span>
          </Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
