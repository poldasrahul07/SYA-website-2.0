/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // Replace with your Supabase project storage host once created,
        // e.g. abcdefgh.supabase.co
        hostname: "*.supabase.co",
      },
    ],
  },
};

export default nextConfig;
