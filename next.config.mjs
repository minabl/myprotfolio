   
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	output: 'export',
	distDir: "out",
	images: {
		unoptimized: true,
		loader: "akamai",
		path: "",
		domains: ["placeimg.com", "mobirise.com"],
  },
  }
   
  export default nextConfig