import React, { useState } from "react";
import Vector from "../components/assets/Images/Vector.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <header className="bg-red-600 text-white px-12 py-4 xs:bg-white sm:bg-white">
      <div className="container mx-auto flex  justify-between items-center">
        <div
          className="w-full flex items-center font-semibold md:hidden lg:hidden"
          style={{ color: "black" }}
        >
          <RxHamburgerMenu
            className="justify-start"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <button onClick={openModal} className="ml-3">
            <IoSearch />
          </button>
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white w-full max-w-2xl mx-4 p-4 rounded-lg shadow-lg">
                <div className="flex items-center border-b border-gray-300 pb-2">
                  <IoSearch className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none text-lg"
                    autoFocus
                  />
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <IoIosClose className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          )}
          <p className="mx-auto">Timbu</p>
          <MdAddShoppingCart />
        </div>

        <div className="flex items-center xs:hidden sm:hidden">
          <img src={Vector} alt="" className="h-[30px] mr-2" />
          <span className="text-base">Timbu</span>
        </div>
        <nav className="xs:hidden sm:hidden md:flex md:space-x-4 lg:flex lg:space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            Shop
          </Link>
          <Link to="/" className="hover:underline">
            About Us
          </Link>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/">
            <MdAddShoppingCart />
          </Link>
          <button className="bg-red-700 text-white px-4 py-2 rounded xs:hidden sm:hidden">
            Get Started →
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden lg:hidden">
          <nav
            className="xs:flex flex-col space-y-4 py-4 sm:flex flex-col space-y-4 py-4 "
            style={{ color: "black" }}
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/" className="hover:underline">
              Shop
            </Link>
            <Link to="/" className="hover:underline">
              About Us
            </Link>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </nav>
          <button className="w-full bg-red-700 text-white px-4 py-2 rounded mt-4">
            Get Started →
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
