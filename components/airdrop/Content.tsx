"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 },
	},
	exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const Content: React.FC = () => {
	return (
		<motion.div className="flex flex-col justify-center items-center"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit">
			<p className="text-[#D8FA06] font-Martian text-[11px] tracking-[-.1em] pb-2">RFD Token Airdrop!</p>
			<div className="flex flex-col justify-center items-center mt-2">
				<p className="text-[#2FEA2F] text-[11px] tracking-[-.05em] font-Martian w-[313px] text-center font-[300]">Complete tasks to qualify for the next</p>
				<div className="flex justify-center items-center">
					<p className="text-[#2FEA2F] text-[11px] tracking-[-.05em] font-Martian pr-2 pl-4">airdrop. Claim up to </p>
					<p className="font-roadRage text-[11px]" style={{ textShadow: "-2px 0px yellow", color: "#E545F4" }}>100 RFD</p>
					<p className="text-[#2FEA2F] text-[11px] tracking-[-.05em] font-Martian pr-2 pl-2">tokens</p>
				</div>
				<p className="text-[#2FEA2F] text-[11px] tracking-[-.05em] font-Martian">every week!</p>
			</div>
			<div className="flex justify-center items-center pt-5">
				<p className="font-kvltura text-[#D8FA06] italic text-[20px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>Claim Now</p>
			</div>
			<div className="flex flex-col justify-center items-center mt-10">
				<div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
					<p className="text-[#D8FA06] text-[9px]">
						Complete 100 taps in the game.
					</p>
					<p className="font-kvltura text-[#D8FA06] italic text-[14px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>Claim Now</p>
				</div>
				<div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
					<p className="text-[#D8FA06] text-[9px]">
						Refer your 3 friends.
					</p>
					<p className="font-kvltura text-[#D8FA06] italic text-[14px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>Claim Now</p>
				</div>
				<div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
					<p className="text-[#D8FA06] text-[9px]">
						Watch a 30-second promotional video.
					</p>
					<p className="font-kvltura text-[#D8FA06] italic text-[14px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>Claim Now</p>
				</div>
				<div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
					<p className="text-[#D8FA06] text-[9px]">
						Share your leaderboard  on media
					</p>
					<p className="font-kvltura text-white italic text-[14px]" >Claimed</p>
				</div>
				<div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
					<p className="text-[#D8FA06] text-[9px]">
						Share your referral link
					</p>
					<p className="font-kvltura text-white italic text-[14px]">Claimed</p>
				</div>
				<div className="flex flex-col justify-center items-center mt-10">
					<span><img src="/progressBar20.png" alt="progressBar20" /></span>
					<p className="font-kvltura text-[#D8FA06] italic text-[14px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>20%</p>
				</div>
				<div className="flex flex-col justify-center items-center mt-3">
					<p className="text-[9px] text-[#2FEA2F] font-Martian">Get 100 RFD Tokens when you reach this</p>
					<p className="text-[9px] text-[#2FEA2F] font-Martian">milestone.</p>
				</div>
			</div>
		</motion.div>
	)
}

export default Content