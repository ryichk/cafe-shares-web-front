import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#000000' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
          <meta name='theme-color' content='#719885' />
          {
            <>
              <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <Script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
                }}
              />
            </>
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
