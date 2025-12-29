
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'placehold.co',
      'i.pinimg.com',
      'images.unsplash.com',
      'picsum.photos',
      'img.icons8.com',
      'raw.githubusercontent.com',
    ],
  },
};

export default nextConfig;
