import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { transparentLogo } from "../../../assets";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div ref={menuRef} className="sticky top-0 p-6 flex justify-between items-center h-[100px] text-white border-b border-white/20 bg-[#010101]/50 backdrop-blur-md z-900 md:h-[70px]">
      <nav className="flex items-center w-full justify-between md:w-auto">
        <img
          className="w-full max-w-[150px] cursor-pointer border-r border-white/20 pr-5 md:border-none md:pr-0"
          src={transparentLogo}
          alt="logo"
          onClick={() => navigate("/")}
        />

        <div
          className={`block md:hidden cursor-pointer p-2.5`}
          onClick={toggleMobileMenu}
        >
          <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </div>
      </nav>

      <ul
        className={`absolute top-[100px] left-0 right-0 bg-[#010101] flex-col py-8 px-6 border-t border-white/20 shadow-lg border-x border-b border-white/10 space-y-6 ${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:relative md:top-0 md:flex md:flex-row md:border-none md:bg-transparent md:py-0 md:px-0 md:shadow-none md:space-y-0`}
      >
        <li className="inline-block text-base cursor-pointer md:my-2.5 md:mx-4">
          <Link to="/sign-in" className="hover:text-gray-200">
            Sign In
          </Link>
        </li>
        <li className="glowing-button">
          <Link to="/join">
            <div className="glowing-button-gradient"></div>
            <div className="glowing-button-inner">
              <div className="glowing-button-text">Join Exelixi today</div>
              <div className="glowing-button-inner-overlay"></div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
