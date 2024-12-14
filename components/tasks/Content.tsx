"use client"

import { motion } from "framer-motion"
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const Referral: React.FC = () => {
  return (
    <motion.div className="flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <p className="text-[#D8FA06] font-Martian text-[11px] tracking-[-.1em] pb-2">Earn RFD Tokens by Completing Tasks</p>

      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex justify-between items-center w-[315px] mb-6">
          <p className="text-[#E545F4] text-[13px] font-Martian">_daily_tasks_</p>
          <p className="text-[#757675] text-[13px] font-Martian">_weekly_tasks_</p>
        </div>
        <div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
          <p className="text-[#D8FA06] text-[9px] tracking-[-.1em] font-Martian">
            Complete 100 taps in the game.
          </p>
          <p className="font-kvltura text-[#D8FA06] italic text-[14px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>Start Tasks Now</p>
        </div>
        <div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
          <p className="text-[#D8FA06] text-[9px] tracking-[-.1em] font-Martian">
            Refer your 3 friends.
          </p>
          <p className="font-kvltura text-white italic text-[14px]" >Completed</p>
        </div>
        <div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
          <p className="text-[#D8FA06] text-[9px] tracking-[-.1em] font-Martian">
            Watch a 30-second promotional video.
          </p>
          <p className="font-kvltura text-white italic text-[14px]" >Completed</p>
        </div>
        <div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
          <p className="text-[#D8FA06] text-[9px] tracking-[-.1em] font-Martian">
            Share your leaderboard  on media
          </p>
          <p className="font-kvltura text-white italic text-[14px]" >Claimed</p>
        </div>
        <div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
          <p className="text-[#D8FA06] text-[9px] tracking-[-.1em] font-Martian">
            Share your referral link
          </p>
          <p className="font-kvltura text-white italic text-[14px]">Claimed</p>
        </div>
        <div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
          <p className="text-[#D8FA06] text-[9px] tracking-[-.1em] font-Martian">
            Share your leaderboard  on media
          </p>
          <p className="font-kvltura text-white italic text-[14px]" >Claimed</p>
        </div>
        <div className="flex justify-between items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[50px] rounded border-1 px-3 mb-2">
          <p className="text-[#D8FA06] text-[9px] tracking-[-.1em] font-Martian">
            Share your referral link
          </p>
          <p className="font-kvltura text-white italic text-[14px]">Claimed</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <span><img src="/progressBar20.png" alt="srepund1" /></span>
          <p className="font-kvltura text-[#D8FA06] italic text-[14px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>20%</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <p className="text-[9px] text-[#2FEA2F] font-Martian">Get 100 RFD Tokens when you reach this</p>
          <p className="text-[9px] text-[#2FEA2F] font-Martian">milestone.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Referral