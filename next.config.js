/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['courses-top.ru']
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.(js|ts)x?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          // plugins: [{ removeViewBox: false }],
          plugins: [{ 
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false,
              }
            },  
          }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });
    return config;
  }
};

module.exports = nextConfig;
