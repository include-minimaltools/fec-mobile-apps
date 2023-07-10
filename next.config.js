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
      {
        protocol: "https",
        port: "",
        pathname: "/**",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  }
};

module.exports = nextConfig;
