import React from "react";

export const NavBar = () => {
  return (
    <div className="flex justify-between px-[10px] items-center py-[18px] border-b-4 border-b-[#0A462F]">
      <span className="text-3xl lg:mx-0 mx-auto flex justify-center items-center text-[#14C682] border-4 px-[24px] py-[10px] rounded-[66px] border-[#14C682] font-[Frijole]">
        CGPACalc
      </span>
      <div className="hidden lg:flex gap-[20px] justify-center items-center">
        <a className="flex justify-center items-center bg-[#14C682] text-white font-semibold hover:bg-[#2f5f4d] transition-all text-xl px-[32px] py-[10px] rounded-[30px] "href="">Home</a>
        <a className="flex justify-center items-center bg-[#14C682] text-white font-semibold hover:bg-[#2f5f4d] transition-all text-xl px-[32px] py-[10px] rounded-[30px] "href="">Home</a>
        <a className="flex justify-center items-center bg-[#14C682] text-white font-semibold hover:bg-[#2f5f4d] transition-all text-xl px-[32px] py-[10px] rounded-[30px] "href="">Home</a>
        <a className="flex justify-center items-center bg-[#14C682] text-white font-semibold hover:bg-[#2f5f4d] transition-all text-xl px-[32px] py-[10px] rounded-[30px] "href="">Home</a>
      </div>
    </div>
  );
};
