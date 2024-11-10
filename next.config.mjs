   
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
		domains: ['minabl.github.io'], // Autorise uniquement ce domaine pour charger des images
	  },
	 
	
  }
   
  export default nextConfig