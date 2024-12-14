"use client"

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

interface MenuTemplateProps {
	children: React.ReactNode;
}

const MenuTemplate: React.FC<MenuTemplateProps> = ({ children }) => {
	const [currentPath, setCurrentPath] = useState("")
	const pathname = usePathname()

	useEffect(() => {
		setCurrentPath(pathname)
	}, [pathname])

	return (
		<div className="relative flex flex-col h-screen w-screen overflow-hidden bg-no-repeat">
			<div className="flex justify-center items-center" style={{ marginTop: "56px" }}>
				<Header path={currentPath} />
			</div>
			<main className="container mx-auto flex-grow justify-center items-center" style={{ marginTop: "48px" }}>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default MenuTemplate;
