import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <>
      <div className="text-black">{children}</div>
    </>
  );
}
