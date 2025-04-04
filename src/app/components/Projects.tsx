import React from "react";

interface ProjectItem {
	nome: string;
	descricao: string;
	tecnologias: string[];
	link?: string;
}

const Projects = () => {
	const projects: ProjectItem[] = [
		{
			nome: "Projeto A",
			descricao:
				"Uma breve descrição do Projeto A, destacando suas principais funcionalidades e o problema que ele resolve.",
			tecnologias: ["React.js", "Tailwind CSS", "Firebase"],
			link: "https://link-do-projeto-a.com",
		},
		{
			nome: "Projeto B",
			descricao:
				"Uma breve descrição do Projeto B, mostrando as tecnologias utilizadas e os desafios superados.",
			tecnologias: ["Next.js", "Shadcn UI", "Prisma"],
			link: "https://link-do-projeto-b.com",
		},
		// Adicione mais projetos aqui
	];

	return (
		<section id="projetos" className="py-16 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
					Projetos
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-gray-200 dark:bg-gray-700 rounded-md shadow-md overflow-hidden"
						>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
									{project.nome}
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-4">
									{project.descricao}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tecnologias.map((tech) => (
										<span
											key={tech}
											className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1 text-sm font-semibold"
										>
											{tech}
										</span>
									))}
								</div>
								{project.link && (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
									>
										Ver Projeto
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
