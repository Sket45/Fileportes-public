/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'es',
      locales: ['gb', 'es', 'esCT']
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development'

  }