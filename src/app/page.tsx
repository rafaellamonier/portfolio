import React from "react";
import Navbar from "./components/Navbar";
import WhoAmI from "./components/WhoAmI";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const HomePage = () => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
			<Navbar />
			<main>
				<WhoAmI />
				<Languages />
				<Experience />
				<Projects />
			</main>
			<footer className="bg-gray-200 dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-300">
				<p>
					&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos
					reservados.
				</p>
			</footer>
		</div>
	);
};

export default HomePage;
