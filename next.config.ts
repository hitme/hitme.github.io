/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: '', // Update this if you're not using a custom domain
}

module.exports = nextConfig