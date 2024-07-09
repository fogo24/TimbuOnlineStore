import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
        <form className="flex">
          <input
            type="text"
            placeholder="Enter your email or phone number"
            className=" flex-grow p-2 rounded-l"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-r">
            Send
          </button>
        </form>
        <p className="mt-4 text-sm">
          © 2024 — Timbu Online Store - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
