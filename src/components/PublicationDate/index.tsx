import { ReactNode } from 'react';

interface PublicationDateProps {
  children: ReactNode;
}

export function PublicationDate({ children }: PublicationDateProps) {
  return (
    <>
      <div className='text-black'>{children}</div>
    </>
  );
}
