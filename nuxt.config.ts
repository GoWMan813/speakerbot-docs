export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  app: {
    head: {
      meta: [
        {
          name: 'twitter:image',
          content: 'https://cdn.streamer.bot/og/speakerbot.png',
        },
      ],
    },
  },
  colorMode: {
    preference: 'dark',
  },
});
