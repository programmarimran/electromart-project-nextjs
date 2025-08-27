// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     images: {
//     remotePatterns: [new URL('https://example.com/images/**'),("")],
//   },
// };

// export default nextConfig;


// // https://example.com/images/iphone15pro.jpg

// https://i.ibb.co.com/gL55gCPf/iphone.webp
// https://i.ibb.co.com/Q7926Wbz/macbook.jpg
// https://i.ibb.co.com/VcgrwBsd/samsung.jpg

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint:{ ignoreDuringBuilds: true}
}