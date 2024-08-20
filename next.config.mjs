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
        hostname: "api.fesp.shop",
        pathname: "/files/**",
      },
    ],
  },
};

export default nextConfig;
