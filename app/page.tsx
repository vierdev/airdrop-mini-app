import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="h-full justify-center items-center">
      <div className="relative">
        <div className="top-0 text-[50px]">
          Welcome_to
        </div>
        <div className="absolute top-0 text-[50px]" style={{fontFamily: "Road Rage", textShadow: "2px 0 #E545F4, -2px 0 #E545F4, 0 2px #E545F4, 0 -2px #E545F4, 1px 1px #E545F4, -1px -1px #E545F4, 1px -1px #E545F4, -1px 1px #E545F4", color: "yellow"}}>
          Come
        </div>
      </div>
      <div className="relative top-30" style={{marginTop: "30px"}}>
        <div className="top-0 text-[62px]" >
          refund
        </div>
        <div className="absolute top-0 text-[82px] text-lime-800" style={{fontFamily: "Road Rage", textShadow: "-8px 0px yellow", color: "#E545F4"}}>
          RFD
        </div>
      </div>
    </div>
  );
}
