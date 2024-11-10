   
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
	  dir: '/',
	},
	basePath: '/myprotfolio', // ajoutez le chemin de base
	images: {
		unoptimized: true, // désactive l'optimisation pour GitHub Pages
	  },
	 
	
  }
   
  export default nextConfig