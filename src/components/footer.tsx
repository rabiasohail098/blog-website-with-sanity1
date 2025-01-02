import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedin, FaInstagram, FaRegCopyright, FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-dark text-white gap-6 px-8 py-6 md:py-4 ">
      {/* Copyright Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center">
        <FaRegCopyright className="text-[20px]" />
        <h2 className="text-sm md:text-base">
          2025 Tech Blog Website made by <b><i>Rabia Sohail</i></b>
        </h2>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <h2 className="text-sm md:text-base">Contact Us</h2>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/parniyasohail098">
            <FaFacebookF className="text-[20px] hover:text-blue-500 transition" />
          </Link>
          <Link href="https://github.com/rabiasohail098">
            <FaGithub className="text-[20px] hover:text-gray-400 transition" />
          </Link>
          <Link href="www.youtube.com/@Parniya098">
            <FaYoutube className="text-[20px] hover:text-red-500 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/rabia-sohail-684740278/">
            <FaLinkedin className="text-[20px] hover:text-blue-600 transition" />
          </Link>
          <Link href="https://www.instagram.com/rabiasohail642/">
            <FaInstagram className="text-[20px] hover:text-pink-500 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
