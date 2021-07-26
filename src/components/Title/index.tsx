import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <>
      <h1 className="text-title text-4xl font-bold md:my-2">{children}</h1>
    </>
  );
}
