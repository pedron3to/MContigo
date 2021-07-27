import { motion, AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

import { Layout } from '../components/Layout';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  const routerNext = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    routerNext.events.on('routeChangeStart', handleStart);
    routerNext.events.on('routeChangeComplete', handleStop);
    routerNext.events.on('routeChangeError', handleStop);

    return () => {
      routerNext.events.off('routeChangeStart', handleStart);
      routerNext.events.off('routeChangeComplete', handleStop);
      routerNext.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <AnimatePresence>
      <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              backgroundColor: 'white',
              filter: 'invert()',
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
}
export default MyApp;
