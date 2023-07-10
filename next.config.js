/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        pathname: "/**",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  appDir: true
};

module.exports = nextConfig;
