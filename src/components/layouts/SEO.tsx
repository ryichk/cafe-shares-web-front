import { VFC } from 'react';

interface MetaData {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImgURL?: string;
  pageImgWidth?: string;
  pageImgHeight?: string;
}

export const SEO: VFC<MetaData> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImgURL,
  pageImgWidth,
  pageImgHeight,
}) => {
  const defaultTitle = 'Cafe Shares';
  const defaultDescription = '日本全国のカフェを検索して探せます';
  const defaultURL = 'cafe-shares.com';
  const defaultImgURL = 'https://cafe-shares.com/cafe-shares.png';

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath ? pagePath : defaultURL;
  const imgURL = pageImgURL ? pageImgURL : defaultImgURL;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;

  return (
    <>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      <meta name='description' content={description} />
      <meta property='fb:app_id' content='2165548063462833' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={imgURL} />
      <meta property='og:image:width' content={String(imgWidth)} />
      <meta property='og:image:height' content={String(imgHeight)} />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link rel='canonical' href={url} />
    </>
  );
};
