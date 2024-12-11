"use client"

import { FaArrowLeft } from "react-icons/fa"
import { CiSettings } from "react-icons/ci"
import { useEffect, useState } from "react";
import { SKIP_HEADER } from "@/config/const";

export interface HeaderProps {
	first: string;
	last: string;
}

export default function header({ first, last }: HeaderProps) {
	const [isHide, setIsHide] = useState(false);

	useEffect(() => {
		const location = window.location.origin;
		SKIP_HEADER.map((path: string) => {
			if (path == location) {
				setIsHide(true)
			}
		})
	}, [])
	return (
		<div className={`flex justify-between items-center w-[354px] h-[26px]${isHide ? "hide" : ""}`}>
			<span>
				<FaArrowLeft />
			</span>
			<p>
				{first}
			</p>
			<p>
				{last}
			</p>
			<span>
				<CiSettings size={20}/>
			</span>
		</div>
	)
}
