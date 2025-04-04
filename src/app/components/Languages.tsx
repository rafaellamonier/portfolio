import React from "react";

const Languages = () => {
	const linguagens = [
		"React.js",
		"JavaScript (ES6+)",
		"TypeScript",
		"HTML",
		"CSS",
		"Tailwind CSS",
		"Next.js",
	];

	return (
		<section id="linguagens" className="py-16 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
					Linguagens e Tecnologias
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{linguagens.map((linguagem) => (
						<div
							key={linguagem}
							className="bg-gray-200 dark:bg-gray-700 rounded-md p-4 flex items-center justify-center text-gray-800 dark:text-gray-200 font-semibold"
						>
							{linguagem}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Languages;
