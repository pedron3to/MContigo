import { ReactNode } from 'react';

interface CategoriesProps {
  children: ReactNode;
}

export function Categories({ children }: CategoriesProps) {
  return (
    <>
      <div className='text-black'>{children}</div>
    </>
  );
}
