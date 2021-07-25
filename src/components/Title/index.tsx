import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <>
      <div className='text-black'>{children}</div>
    </>
  );
}
