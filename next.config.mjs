export const reactStrictMode = true;
export const env = {
	dir: '/',
};
export const images = {
	remotePatterns: [
		{
			protocol: 'https',
			hostname: '**.github.io',
			pathname: '/badge/**'
		}
	]
};