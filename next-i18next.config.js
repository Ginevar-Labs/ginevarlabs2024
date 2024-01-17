module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
      locales: ['default', 'en', 'it', 'es'],
      defaultLocale: 'default',
      localeDetection: false,
    }
  }