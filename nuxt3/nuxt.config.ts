// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'ko' }
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    'nuxt-icon',
    'nuxt-time',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  css: [
    '~/assets/scss/style.scss'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: true
    }
  ],
  imports: {
    dirs: [
      'composables/**',
      'stores/**'
    ]
  },
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },
  ui: {
    prefix: 'ANT'
  },
  pinia: {
    storesDirs: [
      './stores/**'
    ]
  },
  i18n: {
    langDir: './locales',
    locales: [
      { code: 'ko', file: 'ko.ts' },
      { code: 'en', file: 'en.ts' }
    ],
    defaultLocale: 'ko',
    strategy: 'no_prefix'
  }
})
