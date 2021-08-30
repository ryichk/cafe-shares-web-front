import Document, { Html, Head, Main, NextScript } from 'next/document';

import { SEO } from '../components';
import { GA_TRACKING_ID } from 'lib/gtag';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <SEO />
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
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });

                  if (window.performance) {
                    const timeSincePageLoad = Math.round(performance.now());
                    gtag('event', 'js_dependencies_timing_complete', {
                      'name': 'load',
                      'value': timeSincePageLoad,
                      'event_category': 'JS Dependencies'
                    });

                    const perfData = window.performance.timing;

                    const requestResponseTime = perfData.responseEnd - perfData.requestStart;
                    gtag('event', 'request_response_timing_complete', {
                      'name': 'load',
                      'value': requestResponseTime,
                      'event_category': 'Request Response Time'
                    });

                    if (perfData.loadEventEnd) {
                      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                      gtag('event', 'page_load_timing_complete', {
                        'name': 'load',
                        'value': pageLoadTime,
                        'event_category': 'Page Load Time'
                      });
                    }

                    if (perfData.domComplete) {
                      const renderTime = perfData.domComplete - perfData.domLoading;
                      gtag('event', 'rendering_timing_complete', {
                        'name': 'load',
                        'value': renderTime,
                        'event_category': 'Rendering Time'
                      });
                    }
                  }
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
