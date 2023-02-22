export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  app: {
    head: {
      meta: [
        {
          name: 'twitter:image',
          content: 'https://speaker.bot/og-image.png',
        },
      ]
    },
  },
  colorMode: {
    preference: 'dark',
  },
});
