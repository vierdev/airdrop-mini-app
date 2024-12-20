"use client"

import { Avatar } from "@/components/Avatar";
import { motion } from "framer-motion";

interface playerProps {
  name: string;
  points: number;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const LeaderBoard: React.FC = () => {
  const players: playerProps[] = [
    {
      name: "RFDChampion",
      points: 20000
    },
    {
      name: "RFDChampion",
      points: 10000
    },
    {
      name: "RFDChampion",
      points: 9000
    },
    {
      name: "TokenHunter",
      points: 6000
    },
    {
      name: "TapNinja",
      points: 7000
    },
    {
      name: "RFDChampion",
      points: 4000
    },
    {
      name: "RFDChampion",
      points: 2000
    },
  ]
  return (
    <motion.div className="flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="flex justify-center items-center mb-[-110px]">
        <Avatar img="/Avatar/Avatar1.png" name="Striker" rank={1} />
      </div>
      <div className="flex justify-between items-center w-[330px]">
        <Avatar img="/Avatar/Avatar2.png" name="Achiever" rank={2} />
        <Avatar img="/Avatar/Avatar3.png" name="Astral" rank={3} />
      </div>
      <div className="flex flex-col w-[313px] pt-5">
        <div className="flex justify-between items-center border-b py-3">
          <p className="tracking-[.08em] font-Martian text-[13px]">Rank</p>
          <p className="tracking-[.08em] font-Martian text-[13px]">User Name</p>
          <p className="tracking-[.08em] font-Martian text-[13px]">Points</p>
        </div>
        <div className="flex flex-col justify-between items-center w-[313px]">
          {players.sort((a, b) => { return b.points - a.points }).map((palyer: playerProps, index: number) =>
            <div className="flex justify-between items-center border-b py-[13px] w-full" key={index}>
              <p className="font-Martian text-[13px] tracking-[.08em] text-[#2FEA2F]">{index < 6 ? `0${index + 4}` : index + 4}</p>
              <p className="font-Martian text-[13px] tracking-[.08em] text-[#757675]">{palyer.name}</p>
              <p className="font-Martian text-[13px] tracking-[.08em] text-[#757675]">{palyer.points}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default LeaderBoard