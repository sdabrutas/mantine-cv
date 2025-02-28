/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils'],
  },
  output: 'export',
};

export default nextConfig;
