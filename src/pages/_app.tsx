import { motion, AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
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
