import React from "react";

const WhoAmI = () => {
	return (
		<section id="quem-sou" className="py-16 bg-gray-100 dark:bg-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
					Quem Eu Sou
				</h2>
				<p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
					Olá! Sou um desenvolvedor frontend apaixonado por criar interfaces de
					usuário incríveis e experiências web intuitivas. Com foco em React.js,
					busco sempre as melhores práticas e tecnologias para entregar soluções
					de alta qualidade.
				</p>
				<p className="text-lg text-gray-700 dark:text-gray-300">
					Minha expertise reside em transformar ideias em realidade digital, com
					atenção especial à performance, acessibilidade e design responsivo.
				</p>
			</div>
		</section>
	);
};

export default WhoAmI;
