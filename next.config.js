module.exports = {
  // basePath: '/docs',
  reactStrictMode: true,
  assetPrefix: process.env.BASE_PATH || '',
  // ...
  publicRuntimeConfig: {
    // ...
    basePath: process.env.BASE_PATH || '',
    // ...
  },
  distDir: 'public',
};
