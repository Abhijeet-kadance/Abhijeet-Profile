/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export mode
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    trailingSlash: true, // Ensure URLs have a trailing slash, useful for GitHub Pages
  };
  
  export default nextConfig;
  