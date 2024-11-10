   
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
	  dir: '/',
	},
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: '**.github.io',
		  pathname: '/badge/**',
		},
	  ],
	},
  }
   
  export default nextConfig