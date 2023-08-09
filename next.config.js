/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
};
const withPWA = require("next-pwa");
module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
        disable: process.env.NODE_ENV ===      'development',
		skipWaiting: true,
	},
});


const nextConfig = {
  output: 'export',
  //basePath: '/out',
  //assetPrefix: "/",
  // basePath: '/~gcheng/fish_creek',
  // assetPrefix: '/~gcheng/fish_creek',
  // env: {
    // imagePrefix: "/~gcheng/fish_creek",
    // imagePrefix: "/out",
  // }, 
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
    domains: [
      'images.unsplash.com', 'openweathermap.org', 'www.instagram.com', 'scontent.cdninstagram.com'
    ],
  }
}

module.exports = nextConfig
