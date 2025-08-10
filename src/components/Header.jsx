import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { FaAngleDown, FaRegUser } from "react-icons/fa6";
import { BiSearchAlt2 } from "react-icons/bi";

function Header() {
  return (
    <>
      {" "}
      <header className="bg-background text-white text-sm">
        <div className="container  px-4 py-2 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          {/* Left contact info (hidden on small screens) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <CiMail className="text-lg" />
              <a
                href="mailto:lujahtresure@gmail.com"
                className="hover:text-secondary transition"
              >
                lujahtresure@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhoneCall className="text-lg" />
              <a
                href="tel:9825861425"
                className="hover:text-secondary transition"
              >
                +977-9825861425
              </a>
            </div>
          </div>

          {/* Right action icons */}
          <div className="flex justify-between md:justify-end items-center gap-4 flex-wrap">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1 hover:text-secondary cursor-pointer transition">
                <p>English</p>
                <FaAngleDown />
              </div>
              <div className="flex items-center gap-1 hover:text-secondary cursor-pointer transition">
                <p>USD</p>
                <FaAngleDown />
              </div>
              <div className="flex items-center gap-1 hover:text-secondary cursor-pointer transition">
                <p>Login</p>
                <FaRegUser />
              </div>
              <div className="flex items-center gap-1 hover:text-secondary cursor-pointer transition">
                <p>Wishlist</p>
                <FaRegHeart />
              </div>
            </div>

            {/* Cart Icon */}
            <div className="hover:bg-secondary h-[40px] w-[40px] md:h-[50px] md:w-[50px] flex items-center justify-center rounded transition">
              <FaShoppingCart />
            </div>
          </div>
        </div>
        
    <nav className="container mx-auto flex items-center justify-between py-4 px-4">
      {/* Logo */}
      <p className="text-lg font-bold">LUJAH TREaSURE</p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 justify-center items-center flex-1">
        <li className="hover:text-secondary transition cursor-pointer">Home</li>
        <li className="hover:text-secondary transition cursor-pointer">Shop</li>
        <li className="hover:text-secondary transition cursor-pointer">About Us</li>
        <li className="hover:text-secondary transition cursor-pointer">Contact Us</li>
      </ul>

      {/* Search bar */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1 w-full max-w-xs"
        />
        <button className="bg-secondary text-white px-3 py-1 rounded">
          <BiSearchAlt2 />
        </button>
      </div>

   
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden p-4">
          <ul className="flex flex-col gap-4 text-center">
            <li className="hover:text-secondary transition cursor-pointer">Home</li>
            <li className="hover:text-secondary transition cursor-pointer">Shop</li>
            <li className="hover:text-secondary transition cursor-pointer">About Us</li>
            <li className="hover:text-secondary transition cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex mt-4 gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-2 py-1 w-full"
            />
            <button className="bg-secondary text-white px-3 py-1 rounded">
              <BiSearchAlt2 />
            </button>
          </div>
        </div>
      
    </nav>
      </header>
  


    </>
  );
}

export default Header;
