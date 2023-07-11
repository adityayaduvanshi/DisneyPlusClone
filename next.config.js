/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'upload.wikimedia.org',
      'uhdtv.io',
      'sjarqkmkcgyjciuhixyt.supabase.co',
    ],
  },
};

module.exports = nextConfig;
