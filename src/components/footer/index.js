import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="py-5 px-3  flex flex-col bg-blue-900 items-center overflow-hidden"
      style={{
        position: "relative",
        background: "#2e4463",
      }}
    >
      <div className=" flex justify-between flex-wrap">
        <div className="flex flex-col items-center h-full">
          <div>
            <h1 className="font-3 text-5xl text-white text-center mt-10">
              Address
            </h1>
            <div className="text-center mt-6 text-white">
              Mwaikibaki Road,
              <br />
              Huruma street Plot No 23
              <br />
              P.O.Box 5281,
            </div>
            <div className="text-center font-medium text-white">
              Dar es Salaam, Tanzania.
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10  p-2">
        <a href="mailto:info@japanlogistics.co.tz">
          <MdEmail size={27} className="mx-1 hover:text-blue-500 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
