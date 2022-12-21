import React from "react";
import { facebook, imagefoot, linkedin, logo, twitter } from "../assets";
import { navLinks } from "../constants";

const Footer = () => (
  <div className="flex sm:flex-row flex-col-reverse justify-between items-center w-full sm:h-[648px] h-[865px] bg-[#FFF7E3]">
    <div className="sm:w-[513px] w-full sm:h-[248px] h-[900px] sm:ml-[100px] ml-[130px] sm:mt-0 mt-10">
      <img src={logo} alt="logo" className="w-[40px] h-[38px] mb-[24px]" />
      <div className="flex sm:flex-row  flex-col justify-between sm:items-center items-start my-2">
        {navLinks.map((nav, index) => (
          <a key={nav.index} href={`#${nav.id}`} className=' font-manrope font-normal text-[16px] leading-[28px] text-center text-primary sm:mb-0 mb-4'>{nav.title}</a>
        ))}
      </div>
      <div className="w-[136px] h-[36px] flex flex-col my-4 ">
        <h1 className="font-manrope font-bold text-[20px] leading-[30px] text-primary ">
          Follow us
        </h1>
        <div className="flex flex-row justify-between items-center my-2">
          <img
            src={facebook}
            alt="facebook logo"
            className="w-[36px] h-[36px]"
          />
          <img
            src={linkedin}
            alt="linkedin logo"
            className="w-[36px] h-[36px]"
          />
          <img src={twitter} alt="twitter logo" className="w-[36px] h-[36px]" />
        </div>
      </div>
      <div className="flex items-centert relative top-[35px]">
        <p className="font-manrope font-normal text-[16px] leadiing-[28px] text-primary ">
          Copyright © 2022 UIHUT all rights reserved.
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center sm:mt-0  mt-[75px] sm:mr-[100px] mr-0">
            <img src={imagefoot} alt='lays' className= "sm:w-[570px] w-[339px] h-[288px] sm:h-[484px] "/>
    </div>
  </div>
);

export default Footer;
