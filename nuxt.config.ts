// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/ui', '@nuxt/eslint', 'nuxt-auth-sanctum'],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
  },

  nitro: {
    compressPublicAssets: true,
  },

  ui: {
    icons: ['heroicons'],
  },

  sanctum: {
    baseUrl: 'http://localhost:80',
    redirect: {
      onGuestOnly: '/dashboard',
      onLogin: '/dashboard',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth',
      },
      bodyAttrs: {
        class: 'antialiased',
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
})
