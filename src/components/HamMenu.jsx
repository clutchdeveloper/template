import React from "react";
import NavMenu from "./NavMenu";

function HamMenu({ setIsOpen, isOpen }) {
  

  return (
    <>
      <div className="w-[2rem] cursor-pointer  h-[20px] bg top-[15px] right-[20px] flex justify-around flex-col flex-nowrap z-40 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <div className={`w-[2rem] h-[0.2rem] ${isOpen ? "bg-[#ccc]" : "bg-[#333]"}  rounded-sm ${isOpen ? "rotate-45" : "rotate-0"}  origin-[10px] transition-all`}></div>
        {/* <div
          className={`w-[2rem] h-[0.25rem] ${isOpen ? "bg-[#ccc]" : "bg-[#333]"} rounded-sm ${isOpen ? "translate-x-[100%]" : "translate-x-0"}  ${
            isOpen ? "opacity-0" : "opacity-1"
          } transition-all`}></div> */}
        <div className={`w-[2rem] h-[0.2rem] ${isOpen ? "bg-[#ccc]" : "bg-[#333]"} rounded-sm ${isOpen ? "-rotate-45" : "rotate-0"} origin-[7px] transition-all`}></div>
      </div>
     <NavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}

export default HamMenu;
