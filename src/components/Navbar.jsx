import React, { useState } from "react";
import HamMenu from "./HamMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 w-full items-center h-[55px] bg-white border-[#f1f1f1] mx-auto py-9 px-[20px] flex justify-between shadow-md bd-">
        <p>Bitamin</p>
        <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
}

export default Navbar;
