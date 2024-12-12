"use client"

import { useEffect, useState } from "react";
import useClipboard from "react-use-clipboard";

export default function Referral() {
  const [point, setPoint] = useState(956759)
  const [isCopied, setCopied] = useClipboard("956759", { successDuration: 1000, })
  // useEffect(() => {

  // }, [])
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-[#D8FA06] font-Martian text-[11px] tracking-[-.1em] pb-2">Earn More with Referrals</p>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="text-[#2FEA2F] text-[11px] tracking-[-.05em] font-Martian pr-2 pl-4">Invite your friends and get </p>
          <p className="font-roadRage" style={{ textShadow: "-2px 0px yellow", color: "#E545F4" }}>50 RFD</p>
        </div>
        <p className="text-[#2FEA2F] text-[11px] tracking-[-.05em] font-Martian w-[313px] text-center">tokens for each sign-up using your code!</p>
      </div>
      <div className="flex justify-center items-center pt-3">
        <p className="font-kvltura text-[#D8FA06] italic text-[20px]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>Share Your Code Now!</p>
      </div>
      <div className="flex justify-center items-center mt-2">
        <p className="w-[69px] h-[21px] bg-white rounded-sm mr-3 text-center font-roadRage text-[17px]" style={{ textShadow: "-2px 0px #D8FA06", color: "#757675" }}>{point}</p>
        <button className="w-[21px] h-[21px] flex justify-center items-center bg-white rounded-sm" onClick={() => {setCopied;console.log("clipboardclick");
        }}><img src="/copy.png" alt="copy" /></button>
      </div>
      <div className="flex justify-center items-center mt-20">
        <img src="/Referral.png" alt="srepund1" />
      </div>
      <div className="flex justify-center items-center mt-3">
        <p className="font-kvltura italic text-[20px] text-[#D8FA06]" style={{ textShadow: "-0.2px 0.2px 0 #E545F4, 0.2px 0.2px 0 #E545F4, 0.2px -0.2px 0 #E545F4,-0.2px -0.2px 0 #E545F4;" }}>RFD TOKen</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-9">
        <div className="flex justify-center items-center">
          <p className="font-Martian text-[10px] tracking-[-.05em] text-[#F61B5C]">Congratulations!</p>
          <p className="font-Martian text-[10px] tracking-[-.05em]" >You earned 50 RFD tokens for a successful</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-Martian text-[10px] tracking-[-.05em]">referral!</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[305px]">
        <span><img src="/LeftArrow.png" alt="srepund1" /></span>
        <p className="font-roadRage text-[#D8FA06] text-[31px]">300</p>
        <span><img src="/RightArrow.png" alt="srepund1" /></span>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[#2FEA2F] text-[11px]">_total_earn_token_</p>
      </div>
    </div >
  );
}
