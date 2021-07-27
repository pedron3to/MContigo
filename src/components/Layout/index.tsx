import { DefaultSeo } from 'next-seo';
import { ReactNode } from 'react';

import { Search } from '../Search';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_ES',
          url: 'https://mejorconsalud.as.com/',
          site_name: 'Mejor Con Salud',
        }}
        twitter={{
          handle: '@mejorconsalud',
          site: '@mejorconsalud',
          cardType: 'summary',
        }}
      />
      <Header />
      <div className="w-full flex justify-center items-center max-w-screen-lg mx-auto p-4">
        <Search />
      </div>
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
