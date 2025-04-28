/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- important!
  images: {
    unoptimized: true, // because GitHub Pages doesn't handle Next.js image optimization
  },
  // assetPrefix: './', // important if you deploy to GitHub Pages
  basePath: '/profile', // important: replace with your GitHub repo name
  assetPrefix: '/profile',
};

export default nextConfig;