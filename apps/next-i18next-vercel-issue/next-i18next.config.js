const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],

    ...(typeof window === undefined
      ? { localePath: path.resolve('./public/locales') }
      : {
          localePath: path.resolve(
            './apps/next-i18next-vercel-issue/public/public/locales'
          ),
        }),
  },
};
