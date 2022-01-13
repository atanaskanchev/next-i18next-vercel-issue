const path = require('path');

// const isRunningInBrowser = typeof window !== undefined;

const isRunningOnLocalhost =
  !!process.env['NEXT_PUBLIC_IS_RUNNING_ON_LOCALHOST'];

const isRunningOnVercel = !!process.env.VERCEL;

console.log({
  // isRunningInBrowser,
  isRunningOnLocalhost,
  isRunningOnVercel,
});

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  ...(isRunningOnLocalhost && {
    localePath: path.resolve('./public/locales'),
  }),
  ...(isRunningOnVercel && {
    localePath: path.resolve('./public/locales'),
  }),
};
