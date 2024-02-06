const path = require("path");
module.exports = {
    debug: process.env.NODE_ENV === 'production',
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
      localeDetection: false,
    },
    localePath: path.resolve("./public/locales"),
  }