import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) => {
  return (
    <section
      className={cn('max-w-screen-xl w-full mx-auto px-10 md:px-0', className)}
    >
      {children}
    </section>
  );
};

export default Wrapper;
