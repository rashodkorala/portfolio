import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      name="Footer"
      className="flex flex-col-reverse w-full h-[50px] text-[#AAAACCAA] justify-center items-center text-[12px]"
    >
      <p className="flex items-center font-mono">
        <FaRegCopyright size={22} className="px-1" />
        Rashod Korala 2022
      </p>
      <p className="font-mono">Designed & built by Rashod Korala</p>
    </div>
  );
};

export default Footer;
