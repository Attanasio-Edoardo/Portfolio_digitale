import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      // Se il tuo repo si chiama "portfolio" il sito sarà su username.github.io/portfolio
      // Metti qui il nome esatto del repository
      base: process.env.BASE_PATH || ''
    }
  }
};

export default config;
