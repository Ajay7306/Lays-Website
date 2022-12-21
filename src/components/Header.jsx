import React from "react";
import {  hero, image18 } from "../assets";

const Header = () => (
  <div id='home' className="flex sm:flex-row flex-col-reverse items-center  hero-gradient w-full sm:h-[662px] h-[795px] overflow-hidden ">
    <div className="sm:ml-32 ml-0 sm:w-[570px] sm:h-[444px] w-[439px] h-[138px] sm:p-0 px-6 relative sm:top-0  top-[-240px]">
      <div className="flex flex-col">
        <h1 className="font-manrope font-extrabold sm:text-[70px] text-[45px] leading-[46px] sm:leading-[76px] text-[#182327]">
          Feel the Best
          <br className="sm:block hidden" /> Taste With Lays
          <br className="sm:block hidden" /> Crisps
        </h1>
        <img
          src={image18}
          alt="lays"
          className="sm:w-[73px] sm:h-[54px] w-[48px] h-[37px] relative sm:left-[230px] sm:top-[-60px] left-[150px] top-[-38px]"
        />
      </div>

      <p className="sm:w-[570px] w-[339px] sm:h-[96px]  h-[72px] font-manrope font-normal sm:text-[20px] text-[14px] sm:leading-[32px] leading-[24px] text-[#182327] mb-11">
        Feel the best and awesome taste with Lays Crisps. There has been various
        kind of Crisps you can eat and feel the wonder taste of this awesome
        product.{" "}
      </p>
      <button className="w-[152px] h-[60px] bg-primary rounded-lg text-white font-manrope font-normal text-[18px] leading-[30px] text-center">
        All Crisps
      </button>
    </div>
    <img src={hero} alt='hero' className="sm:w-[680px] sm:h-[680px] w-[375px] h-[375px] relative sm:top-0  top-[-250px]"/>
  </div>
);

export default Header;
