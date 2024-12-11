"use client"

export interface HeaderProps {
	img: string;
	name: string;
	rank: number;
}

export const Avatar = ({ img, name, rank }: HeaderProps) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img src={img} className="mb-6" alt="avatar"></img>
			<p className={`text-[13px] text-[${rank == 1 ? "#E545F4" : rank ==2 ? "#2FEA2F" : "#D8FA06"}] font-Martian tracking-[.08em]`}>{name}</p>
			<p className="text-[#F61B5C] font-Martian text-[13px]">0{rank}</p>
		</div>
	)
}