/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
	output: "export",
	// Opcional: Configure o basePath se o seu site estiver em um subdiretório do GitHub Pages
	// basePath: '/portfolio',
	images: {
		unoptimized: true, // Necessário para exportação estática com imagens não otimizadas
	},
};

export default nextConfig;
