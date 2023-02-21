export default defineAppConfig({
  docus: {
    title: 'Speaker.bot',
    description: 'Supercharged Text to Speech (TTS) for your live stream!',
    image: '/og-image.png',
    aside: {
      level: 1,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'speakerbot-docs',
      owner: 'Streamerbot',
      edit: true,
    },
  },
});
