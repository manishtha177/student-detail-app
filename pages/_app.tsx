import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { StudentsProvider } from '../src/context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StudentsProvider>
      <Component {...pageProps} />
    </StudentsProvider>
  );
}

export default appWithTranslation(MyApp);
