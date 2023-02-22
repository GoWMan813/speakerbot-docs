export default defineAppConfig({
  docus: {
    title: 'Speaker.bot',
    description: 'Supercharged Text to Speech (TTS) for your live stream!',
    url: 'https://speaker.bot',
    image: '/og-image.png',
    socials: {
      twitter: 'streamerdotbot',
      github: 'streamerbot/speakerbot-docs',
    },
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
