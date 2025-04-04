import React from "react";

interface ExperienceItem {
	empresa: string;
	cargo: string;
	periodo: string;
	descricao: string[];
}

const Experience = () => {
	const experiencias: ExperienceItem[] = [
		{
			empresa: "Empresa X",
			cargo: "Desenvolvedor Frontend React",
			periodo: "2023 - Presente",
			descricao: [
				"Desenvolvimento e manutenção de interfaces de usuário complexas utilizando React.js.",
				"Implementação de testes unitários e de integração para garantir a qualidade do código.",
				"Colaboração com designers e outros desenvolvedores para entregar soluções completas.",
				"Otimização de performance de aplicações web.",
			],
		},
		{
			empresa: "Startup Y",
			cargo: "Desenvolvedor Frontend Júnior",
			periodo: "2021 - 2023",
			descricao: [
				"Participação no desenvolvimento de novas funcionalidades para a plataforma principal.",
				"Utilização de HTML, CSS e JavaScript para criar interfaces responsivas.",
				"Aprendizado e aplicação de metodologias ágeis (Scrum).",
			],
		},
	];

	return (
		<section id="experiencia" className="py-16 bg-gray-100 dark:bg-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
					Experiência
				</h2>
				<div className="space-y-8">
					{experiencias.map((item, index) => (
						<div
							key={index}
							className="bg-white dark:bg-gray-700 rounded-md p-6 shadow-md"
						>
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
								{item.cargo}
							</h3>
							<h4 className="text-lg text-gray-600 dark:text-gray-300 mb-1">
								{item.empresa}
							</h4>
							<p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
								{item.periodo}
							</p>
							<ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
								{item.descricao.map((desc, i) => (
									<li key={i}>{desc}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
