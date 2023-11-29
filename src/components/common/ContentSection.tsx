import React from 'react';
import Wrapper from './Wrapper';

import Link from 'next/link';

interface ContentSectionProps {
  title: string;
  children?: React.ReactNode;
  moreInfo?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  moreInfo = false,
}) => {
  return (
    <section>
      <Wrapper className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-3xl hidden md:block text-slate-900 font-medium'>
            {title}
          </h2>
          {moreInfo && (
            <Link
              href={''}
              className='px-2 py-3 bg-[#daf3f6] text-[#34929e] rounded-2xl font-medium'
            >
              Xem thêm
            </Link>
          )}
        </div>
        {children}
      </Wrapper>
    </section>
  );
};

export default ContentSection;
