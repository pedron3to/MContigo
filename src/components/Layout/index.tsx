import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import Main from './Main';
import { DefaultSeo } from 'next-seo';
import { Search } from '../Search';
import { motion } from 'framer-motion';

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
      <Main>
      <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          },
        }}>
        {children}
        </motion.div>
        </Main>
      <Footer />
    </>
  );
}
