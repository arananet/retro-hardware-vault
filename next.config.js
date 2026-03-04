/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Simplifies deployment if using external CDNs later
  },
};

export default nextConfig;
