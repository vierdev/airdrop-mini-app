"use client"

import TapDialog from "@/components/TapDialog";
import { useState } from "react";

export default function Game() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const [happenClick, setHappenClick] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[58px] rounded border-1">
        <p className="text-[#D8FA06] text-[10px]">
          Tap 1,000 times today - Reward: 100 RFD tokens
        </p>
      </div>
      <div className="mt-5">
        <button onClick={() => { setHappenClick(prev => prev + 1) }}><img src="/EarnAvatar.png" alt="EarnAvatar" /></button>
        <div className="absolute top-[31%] left-[71%]">
          <img src="/srepund.png" alt="srepund" />
        </div>
        <div className="absolute top-[30%] left-[2%]">
          <img className="rotate-45" src="/srepund.png" alt="srepund1" />
        </div>
        <div className="absolute top-[58%] left-[-4%]">
          <img src="/srepund.png" alt="srepund1" />
        </div>
        <div className="absolute top-[55%] left-[85%]">
          <img src="/srepund.png" alt="srepund1" />
        </div>
        <div className="absolute top-[71%] left-[45%]">
          <img src="/srepund.png" alt="srepund1" />
        </div>
        <div className="absolute top-[65%] left-[85%]">
          <p className={`font-roadRage text-[23px] mt-10 text-[#F61B5C] rotate-[25deg] ${happenClick < 3 ? "hide" : ""}`}>+30</p>
        </div>
        <div className="absolute top-[65%] left-[5%]">
          <p className={`font-roadRage text-[23px] mt-10 text-[#FF43FA] rotate-[25deg] ${happenClick < 2 ? "hide" : ""}`}>+20</p>
        </div>
        <div className="absolute top-[20%] left-[55%]">
          <p className={`font-roadRage text-[23px] mt-10 text-[#E545F4] rotate-[25deg] ${happenClick < 1 ? "hide" : ""}`}>+10</p>
        </div>
      </div>
      <div>
        <button className="font-roadRage text-[30px] mt-10 text-[#2FEA2F]" onClick={() => {
          setIsOpenDialog(true)
        }}>TAP ME</button>
      </div>
      <div className="flex flex-col justify-center items-center mt-[90px] h-[56px]">
        <img src="./progressBar.png" className="pb-4" alt="srepund1" />
        <div className="flex justify-center items-center">
          <img src="./verticalSrepund.png" className="pr-2 h-4" alt="srepund1" />
          <p className="font-kvltura text-[#D8FA06] text-[17px]">80/100 Token</p>
        </div>
      </div>
      <TapDialog isOpen={isOpenDialog} onClose={() => setIsOpenDialog(false)} />
    </div>
  );
}
