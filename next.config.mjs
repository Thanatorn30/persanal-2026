/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/persanal-2026',
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
