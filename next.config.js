/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_KEY_FOR_TRAILERS: process.env.API_KEY_FOR_TRAILERS,
  },
};
