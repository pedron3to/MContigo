import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <>
      <main className="h-1000px">{children}</main>
    </>
  );
}
