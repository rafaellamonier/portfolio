"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid"; // Certifique-se de instalar @heroicons/react

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-white dark:bg-gray-900 shadow-md py-4">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link href="/" className="text-xl font-bold">
					Meu Portfólio
				</Link>
				<div className="hidden md:flex space-x-6">
					<Link
						href="#quem-sou"
						className="hover:text-blue-500 dark:hover:text-blue-400"
					>
						Quem Sou
					</Link>
					<Link
						href="#linguagens"
						className="hover:text-blue-500 dark:hover:text-blue-400"
					>
						Linguagens
					</Link>
					<Link
						href="#experiencia"
						className="hover:text-blue-500 dark:hover:text-blue-400"
					>
						Experiência
					</Link>
					<Link
						href="#projetos"
						className="hover:text-blue-500 dark:hover:text-blue-400"
					>
						Projetos
					</Link>
				</div>
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
					>
						{isOpen ? (
							<XIcon className="h-6 w-6" />
						) : (
							<MenuIcon className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Menu Responsivo (Mobile) */}
			{isOpen && (
				<div className="md:hidden bg-white dark:bg-gray-800 py-2 px-4">
					<Link
						href="#quem-sou"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
						onClick={toggleMenu}
					>
						Quem Sou
					</Link>
					<Link
						href="#linguagens"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
						onClick={toggleMenu}
					>
						Linguagens
					</Link>
					<Link
						href="#experiencia"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
						onClick={toggleMenu}
					>
						Experiência
					</Link>
					<Link
						href="#projetos"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
						onClick={toggleMenu}
					>
						Projetos
					</Link>
				</div>
			)}
		</header>
	);
};

export default Navbar;
