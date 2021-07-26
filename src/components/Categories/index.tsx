import { ReactNode } from 'react';

interface CategoriesProps {
  children: ReactNode;
}

export function Categories({ children }: CategoriesProps) {
  return (
    <>
      <p className='text-secondary font-bold'>{children}</p>
    </>
  );
}
