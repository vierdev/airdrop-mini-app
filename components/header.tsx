"use client"

import { FaArrowLeft } from "react-icons/fa"
import { CiSettings } from "react-icons/ci"
import { useEffect, useState } from "react";

interface HeaderProps {
	path: string
}

export default function Header(path: HeaderProps) {

	const renderHeaderName = () => {
		let title;
		if (path.path == "/game") {
			title =
				<div className="flex justify-between items-center gap-5">
					<p className="text-[24px] font-Martian">Tap</p>
					<p className="text-[24px] font-Martian">to</p>
					<div className="text-[24px] font-Martian relative">EARN
						<div className="absolute top-0 left-2 font-roadRage text-[25px]" style={{ textShadow: "-4px 0px yellow", color: "#E545F4" }}>EARN</div>
					</div>
				</div>
		} else if (path.path == "/leaderboard") {
			title =
				<div className="flex justify-between items-center gap-5">
					<p className="text-[24px] font-Martian">Leader</p>
					<div className="text-[24px] font-Martian relative">Board
						<div className="absolute top-0 left-2 font-roadRage text-[25px]" style={{ textShadow: "-4px 0px yellow", color: "#E545F4" }}>BOARD</div>
					</div>
				</div>
		} else if (path.path == "/referral") {
			title =
				<div className="flex justify-between items-center">
					<p className="text-[24px] font-Martian">Refer</p>
					<div className="text-[24px] font-Martian relative">ral
						<div className="absolute top-0 left-2 font-roadRage text-[25px]" style={{ textShadow: "-4px 0px yellow", color: "#E545F4" }}>RAL</div>
					</div>
				</div>
		} else if (path.path == "/airdrop") {
			title =
				<div className="flex justify-between items-center">
					<p className="text-[24px] font-Martian">Air</p>
					<div className="text-[24px] font-Martian relative">drop
						<div className="absolute top-0 left-2 font-roadRage text-[25px]" style={{ textShadow: "-4px 0px yellow", color: "#E545F4" }}>DROP</div>
					</div>
				</div>
		} else if (path.path == "/tasks") {
			title =
				<div className="flex justify-between items-center">
					<p className="text-[24px] font-Martian">Daily</p>
					<div className="text-[24px] font-Martian relative">task
						<div className="absolute top-0 left-2 font-roadRage text-[25px]" style={{ textShadow: "-4px 0px yellow", color: "#E545F4" }}>task</div>
					</div>
				</div>
		}
		return title;

	}

	return (
		<div className={`flex justify-between items-center w-[354px] h-[26px] ${path.path == "/" ? "hide" : ""}`}>
			<span>
				<FaArrowLeft />
			</span>
			<div className="flex">
				{
					renderHeaderName()
				}
			</div>
			<span>
				<CiSettings size={20} />
			</span>
		</div>
	)
}
