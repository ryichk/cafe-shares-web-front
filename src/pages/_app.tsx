import { Amplify, Auth } from 'aws-amplify';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/swiper-custom.css';

import SEO from '../../next-seo.config';
import awsExports from '../aws-exports';
import { AlertContext, AuthContext } from '../contexts';
import { ICognitoUser } from '../interfaces';
import * as gtag from '../lib/gtag';

Amplify.configure({ ...awsExports, ssr: true });

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [user, setUser] = useState<ICognitoUser | undefined>();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isInfo, setIsInfo] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
      <AlertContext.Provider
        value={{
          isError,
          errorMessage,
          isInfo,
          infoMessage,
          isSuccess,
          successMessage,
          setIsError,
          setErrorMessage,
          setIsInfo,
          setInfoMessage,
          setIsSuccess,
          setSuccessMessage,
        }}
      >
        <AuthContext.Provider value={{ user, setUser }}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </AlertContext.Provider>
    </>
  );
};

export default MyApp;
