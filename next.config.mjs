/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '/friends.json/i.pravatar.cc/150',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig;
