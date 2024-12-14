"use client"

import React, { useEffect, useState } from "react"
import { Link } from "@nextui-org/link"
import { PAGES } from "../config/const"
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
	const [currentPath, setCurrentPath] = useState("");
	const [isHide, setIsHide] = useState(false);
	const pathname = usePathname()

	useEffect(() => {
		setCurrentPath(pathname);
		let is_hide = false;
		PAGES.map((page: any, key: number) => {
			if (pathname == page.path) {
				if (!page.has_footer) {
					is_hide = true;
				}
			}
		})
		setIsHide(is_hide);
	}, [pathname])

	return (
		<div className="flex justify-center items-center">
			<footer className={`w-[418px] h-[72px] bg-[#16161675] rounded-xl flex items-center justify-between p-3 footer ${isHide ? "hide" : "flex"}`}>
				{
					PAGES.map((page: any, index: number) =>
						page.show_menu ?
							<Link
								key={index}
								href={page.path}
							>
								<button className={currentPath == page.path ? "text-[#D8FA06]" : "text-white"} onClick={() => setCurrentPath(page.path)}>{page.name}</button>
							</Link> : null
					)
				}
			</footer>
		</div>
	)
}

export default Footer
