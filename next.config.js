module.exports = {
  images: {
    domains: ['imgfp.hotp.jp', process.env.S3_BUCKET_HOSTNAME],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
};
