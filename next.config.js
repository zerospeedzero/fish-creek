/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/out',
  // assetPrefix: "/out",
  // basePath: '/~gcheng/fish_creek',
  // assetPrefix: '/~gcheng/fish_creek',
  env: {
    // imagePrefix: "/~gcheng/fish_creek",
    // imagePrefix: "/out",
  }, 
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com', 'openweathermap.org'
    ]
  }
}

module.exports = nextConfig
