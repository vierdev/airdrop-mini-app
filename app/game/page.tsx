import { title } from "@/components/primitives";
import Link from "next/link";

export default function Game() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[#161616B5] border-[#2FEA2F69] w-[315px] h-[58px] rounded border-1">
        <p className="text-[#D8FA06] text-[10px]">
          Tap 1,000 times today - Reward: 100 RFD tokens
        </p>
      </div>
      <div className="mt-5">
        <img src="/EarnAvatar.png" />
        <div className="absolute top-[31%] left-[71%]">
          <img src="/srepund.png" />
        </div>
        <div className="absolute top-[30%] left-[2%]">
          <img className="rotate-45" src="/srepund.png" />
        </div>
        <div className="absolute top-[58%] left-[-4%]">
          <img src="/srepund.png" />
        </div>
        <div className="absolute top-[55%] left-[85%]">
          <img src="/srepund.png" />
        </div>
        <div className="absolute top-[71%] left-[45%]">
          <img src="/srepund.png" />
        </div>
        <div className="absolute top-[65%] left-[85%]">
          <p className="font-roadRage text-[23px] mt-10 text-[#F61B5C] rotate-[25deg]">+30</p>
        </div>
        <div className="absolute top-[65%] left-[5%]">
          <p className="font-roadRage text-[23px] mt-10 text-[#FF43FA] rotate-[25deg]">+20</p>
        </div>
        <div className="absolute top-[20%] left-[55%]">
          <p className="font-roadRage text-[23px] mt-10 text-[#E545F4] rotate-[25deg]">+10</p>
        </div>
      </div>
      <div>
        <p className="font-roadRage text-[30px] mt-10 text-[#2FEA2F]">TAP ME</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[90px] h-[56px]">
        <img src="./progressBar.png" className="pb-4" />
        <div className="flex justify-center items-center">
          <img src="./verticalSrepund.png" className="pr-2 h-4" />
          <p className="font-kvltura text-[#D8FA06] text-[17px]">80/100 Token</p>
        </div>
      </div>
    </div>
  );
}
