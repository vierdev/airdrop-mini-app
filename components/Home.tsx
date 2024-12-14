"use client"

import { Link } from "@nextui-org/link";
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

const Home: React.FC = () => {
  return (
    <motion.div className="h-full flex flex-col justify-center  items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative">
          <div className="top-0 text-[37px] font-Martian tracking-[.08em]">
            welcome_to
          </div>
          <div className="absolute top-0 text-[39px] left-[92px] font-roadRage" style={{ textShadow: "2px 0 #E545F4, -2px 0 #E545F4, 0 2px #E545F4, 0 -2px #E545F4, 1px 1px #E545F4, -1px -1px #E545F4, 1px -1px #E545F4, -1px 1px #E545F4", color: "yellow" }}>
            Come
          </div>
        </div>
        <div className="relative top-30" style={{ marginTop: "30px" }}>
          <div className="top-0 text-[62px] font-bold font-Martian tracking-[.08em]" >
            refund
          </div>
          <div className="absolute top-[-10px] left-[64px] text-[82px] font-roadRage" style={{ textShadow: "-8px 0px yellow", color: "#E545F4" }}>
            RFD
          </div>
        </div>
        <div className="mt-20 rounded-[18px] border-1 w-[184px] h-[64px] flex flex-col justify-center items-center border-[#E545F4] bg-[#2D2D2D]">
          <Link href="/game">
            <button className="text-[20px] font-roadRage" style={{ textShadow: "2px 0 #E545F4, -2px 0 #E545F4, 0 2px #E545F4, 0 -2px #E545F4, 1px 1px #E545F4, -1px -1px #E545F4, 1px -1px #E545F4, -1px 1px #E545F4", color: "yellow" }}>GET STARTED</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
export default Home