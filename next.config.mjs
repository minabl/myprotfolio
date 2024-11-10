/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	basePath: '/myprotfolio',  // Spécifie le sous-répertoire pour GitHub Pages
	assetPrefix: '/myprotfolio/', // Spécifie le chemin pour les ressources statiques
	images: {
	  unoptimized: true,         // Nécessaire pour GitHub Pages
	  loader: 'imgix',           // Utilise un autre loader si nécessaire
	  domains: ['minabl.github.io'], // Ajoutez le domaine de l’hébergement des images
	},
  };  
module.exports = nextConfig;

  