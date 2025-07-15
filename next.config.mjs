/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flights.myrealtrip.com",
        pathname: "/air/wfw/imgs/mbl/logo/air/**",
      },
      {
        protocol: "https",
        hostname: "fesp-api.koyeb.app",
        pathname: "/market/files/**",
      },
    ],
  },
};

export default nextConfig;
