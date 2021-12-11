import { CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../../next-seo.config';
import awsExports from '../aws-exports';
import 'tailwindcss/tailwind.css';

import { AuthContext } from '../contexts/AuthContext';
import * as gtag from '../lib/gtag';

Amplify.configure({ ...awsExports, ssr: true });

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [user, setUser] = useState<CognitoUser | undefined>();

  useEffect(() => {
    const init = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        console.log(error);
      }
    };
    init();

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
      <AuthContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </>
  );
};

export default MyApp;
