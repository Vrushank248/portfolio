import React, { useEffect, useRef, useState } from "react";
import { MdHome } from "react-icons/md";
import { FaUser, FaRegFileAlt, FaRegStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { LuCode2 } from "react-icons/lu";
import { AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current path
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NAVBAR_LINK = [
    { id: 1, path: "/Portfolio/", name: "Home", icon: MdHome },
    { id: 2, path: "/Portfolio/about", name: "About", icon: FaUser },
    { id: 3, path: "/Portfolio/projects", name: "Projects", icon: LuCode2 },
    { id: 4, path: "/Portfolio/resume", name: "Resume", icon: FaRegFileAlt },
    {
      id: 5,path: "/Portfolio/contact",name: "Contact", icon: MdEmail,
    },
    // { id: 6, path: "/Portfolio/blogs", name: "Blogs", icon: ImBlog },
  ];

  return (
    <div
      className={`md:p-3 px-10 pt-3 pb-3 md:mt-0 py-2 bg-transparent fixed text-[#FFFFFF] w-full top-0 flex justify-between md:justify-around items-center z-10 transition-colors duration-300 ${
        isScrolled ? "backdrop-blur-sm bg-opacity-70" : "bg-transparent"
      }`}
      ref={navbarRef}
    >
      <div className="text-[#CB5EF4] text-3xl p-2 font-semibold cursor-pointer w-[10%] items-center justify-center flex">
        <Link to={"/Portfolio/"}>V V</Link>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center p-4 sm:p-0 absolute sm:static top-[100%] left-0 sm:top-auto sm:left-auto z-50 transition-all duration-500 ease-in-out bg-[#00194aea] md:bg-transparent bg-cover bg-center md:bg-none`}
      >
        <ul className="flex flex-col sm:flex-row sm:gap-10 gap-2 text-center sm:text-left sm:items-center rounded-lg">
          {NAVBAR_LINK.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`text-xl ${
                  location.pathname === link.path
                    ? "text-purple-500"
                    : "text-white"
                }`}
              >
                <div className="relative group p-2 md:space-x-2 font-bold cursor-pointer flex items-center justify-center">
                  {React.createElement(link.icon, {
                    color:
                      location.pathname === link.path
                        ? "#CB5EF4"
                        : "currentColor",
                  })}
                  <span>{link.name}</span>
                  <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[25%] md:w-[10%] flex items-center justify-center gap-8">
        <Link to={"https://github.com/Vrushank248"}>
          <button className="flex space-x-1 bg-[#6e38a4] p-2 rounded px-4 border-[1px] border-gray-600 cursor-pointer hover:bg-[#643b8d] transition-transform duration-200 transform hover:scale-105">
            <span>
              <AiOutlineGithub size={20} />
            </span>
            <span>
              <FaRegStar size={20} />
            </span>
          </button>
        </Link>
        <button className="sm:hidden flex mr-2 " onClick={toggleMenu}>
          <HiMenu size={28} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
