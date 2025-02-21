import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black p-6 shadow-xl transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 hover:scale-110 transition-all duration-300">
          Jobby App
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
            activeClassName="text-yellow-400 font-bold"
          >
            <div className ="flex-col justify-center">
            <FaHome size={25}/>
            Home
            </div>
           
          </NavLink>
          <NavLink
            to="/jobs"
            className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
            activeClassName="text-yellow-400 font-bold"
          >
             <div className ="flex-col justify-center">
            <FaInternetExplorer size={25}/>
            Explore
            </div>
          </NavLink>

          <NavLink
            to="/login"
            className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
            activeClassName="text-yellow-400 font-bold"
          >
             <div className ="flex-col justify-center">
            <IoLogOut size={25}/>
            Logout
            </div>
          </NavLink>
          {/* <NavLink
            to="/explore"
            className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
            activeClassName="text-yellow-400 font-bold"
          >
            Explore
          </NavLink> */}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8 transform transition-all duration-300 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden mt-4 space-y-4 px-4 py-6 bg-gray-900 rounded-lg shadow-2xl transition-all duration-300 ease-in-out`}
      >
        <NavLink
          to="/"
          className="block text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
          activeClassName="text-yellow-400 font-bold"
        >
           <div className ="flex gap-2 justify-center">
            <FaHome size={25}/>
            Home
            </div>
        </NavLink>
        <NavLink
          to="/jobs"
          className="block text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
          activeClassName="text-yellow-400 font-bold"
        >
           <div className ="flex gap-2 justify-center">
            <FaInternetExplorer size={25}/>
            Explore
            </div>
        </NavLink>
       

        <NavLink
          to="/login"
          className="block text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
          activeClassName="text-yellow-400 font-bold"
        >
           <div className ="flex gap-2 justify-center">
            <IoLogOut size={25}/>
            Logout
            </div>
        </NavLink>


       
      </div>
    </nav>
  );
};

export default Navbar;
