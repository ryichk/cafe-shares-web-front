import { Amplify } from 'aws-amplify';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SEO from '../../next-seo.config';
import awsExports from '../aws-exports';
import 'tailwindcss/tailwind.css';

import * as gtag from '../lib/gtag';

Amplify.configure({ ...awsExports, ssr: true });

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
