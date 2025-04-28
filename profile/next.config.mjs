/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- important!
  images: {
    unoptimized: true, // because GitHub Pages doesn't handle Next.js image optimization
  },
  assetPrefix: './', // important if you deploy to GitHub Pages
  basePath: '/Abhijeet-Profile', // important: replace with your GitHub repo name
};

export default nextConfig;
  
