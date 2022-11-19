/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/bukhari/book",
        destination: "/bukhari/books",
        permanent: true,
      },
    ];
  },
};
