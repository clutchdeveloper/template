import React, {useRef, useEffect} from "react";



const menuList = [
  {
    title: "Blog",
  },
  {
    title: "More",
  },
 
  {
    title: "About",
  },
  
  {
    title: "Login",
  },
  {
    title: "Register",
  },
];

function NavMenu({ setIsOpen, isOpen }) {
  
  const menuRef = useRef(null)
  
  const handleClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
  
  return (
    <ul ref={menuRef}
      className={`flex flex-col z-10 items-center pt-[3.5rem] fixed top-0 right-0 w-[300px] bg-[#0d2538] text-white h-screen md:h-auto md:justify-center md:items-center md:bg-inherit md:flex-row md:static md:pt-0  ${
        isOpen ? "translate-x-0" : "translate-x-[100%]"
        } transition-all md:translate-x-0`}>
      {menuList.map((item, i) => {
        return <li className="px-[10px] w-full py-[18px] border-b md:border-0 border-slate-600 md:text-slate-500 cursor-pointer flex hover:text-slate-500 justify-center font-semibold">{item.title}</li>
      })}
      <li className="py-3 md:hidden hover mt-auto text-sm font-medium">Bitmine</li>
    </ul>
  );
}

export default NavMenu;
