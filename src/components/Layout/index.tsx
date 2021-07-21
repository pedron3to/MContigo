import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import Main from './Main';
// import { Meta } from './Meta';
// import { SEO } from './SEO';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <SEO />
      <Meta /> */}
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
