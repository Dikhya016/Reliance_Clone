import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

import lo1 from "../assets/res.png";
import lo2 from "../assets/dna.png";

function Navbar() {
  const location = useLocation(); // Get current location
  const isHomePage = location.pathname === "/"; // Check if the current page is home

  return (
    <>
      {isHomePage ? (
        // Navbar for Home page
        <>
          <div className="bg-[#E42529] px-5 pt-1">
            <div className=" flex justify-end text-white font-semibold text-[13px]">
              <p className="border-r-2 pr-2 pl-2">Find a store</p>
              <p className="border-r-2 pr-2 pl-2">Buying guides</p>
              <p className=" pl-2">Contact us</p>
            </div>
          </div>
          <nav className="bg-[#E42529] h-[75px] px-5 pt-2 sticky top-0 z-50">
            <div className="flex justify-between items-center pl-6">
              <Link to="/">
                <img className="w-[170px] h-[50px]" src={logo} alt="" />
              </Link>
              <div className="relative border-2 w-[470px] rounded-full">
                <input
                  className="relative w-full pl-6 pr-6 text-sm pt-1.5 pb-1.5 rounded-full outline-blue-700"
                  type="text"
                  placeholder="Find your favorite products"
                />
                <FaSearch className="absolute right-0 top-2 mr-4 text-[#BBBBBB] text-lg" />
              </div>

              <div className="flex text-white font-semibold text-[14px]">
                <p className="border-r-2 pr-2">Select your Pin Code</p>
                <div className="border-r-2 px-2">
                  <Link to="/cart" className="flex items-center gap-2">
                    <FaShoppingCart />
                    Cart
                  </Link>
                </div>
                <div className="pl-2">
                  <Link to="/login" className="flex items-center gap-2">
                    <FaUser />
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : (
        // Navbar for other pages
        <>
          <div className="flex bg-[#E42529] justify-evenly items-center text-white font-bold text-sm h-[38px] border-b-[1px] border-[#EC676A]">
            <h1>OUR BRAND PROMISE</h1>
            <span className="flex items-center h-full px-4 border-r-[1px] border-[#EC676A]">
              <RiArrowLeftRightFill className="text-xl" />
              EASY RETURN
            </span>
            <span className="flex items-center pr-4 h-full border-r-[1px] border-[#EC676A]">
              <BsTruck className="text-xl" />
              NEXT DAY DELIVERY
            </span>
            <span className="flex items-center pr-4 h-full border-r-[1px] border-[#EC676A]">
              <img src={lo1} alt="" />
              SERVICE GUARANTEE
            </span>
            <span className="flex items-center pr-4 h-full border-r-[1px] border-[#EC676A]">
              <img src={lo2} alt="" />
              UNMATCHED NETWORK
            </span>
            <span className="flex items-center pr-4 h-full border-r-[1px] border-[#EC676A]">
              <FaLocationDot className="text-lg" />
              Find a store
            </span>
            <span>Contact us</span>
          </div>
          <nav className="bg-[#E42529] h-[75px] px-5 pt-2 sticky top-0 z-50">
            <div className="flex justify-between items-center pl-6">
              <Link to="/">
                <img className="w-[170px] h-[50px]" src={logo} alt="" />
              </Link>
              <div className="relative border-2 w-[470px] rounded-full">
                <input
                  className="relative w-full pl-6 pr-6 text-sm pt-1.5 pb-1.5 rounded-full outline-blue-700"
                  type="text"
                  placeholder="Find your favorite products"
                />
                <FaSearch className="absolute right-0 top-2 mr-4 text-[#BBBBBB] text-lg" />
              </div>

              <div className="flex text-white font-semibold text-[14px]">
                <p className="border-r-2 pr-2">Select your Pin Code</p>
                <div className="border-r-2 px-2">
                  <Link to="/cart" className="flex items-center gap-2">
                    <FaShoppingCart />
                    Cart
                  </Link>
                </div>
                <div className="pl-2">
                  <Link to="/login" className="flex items-center gap-2">
                    <FaUser />
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

export default Navbar;
