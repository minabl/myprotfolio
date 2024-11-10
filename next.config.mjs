   
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	basePath: '/myprotfolio',  // Spécifie le sous-répertoire pour GitHub Pages
	
	images: {
	  unoptimized: true,         // Nécessaire pour GitHub Pages
	  domains: ['minabl.github.io'], // Ajoutez le domaine de l’hébergement des images
	},
  }
   
  export default nextConfig