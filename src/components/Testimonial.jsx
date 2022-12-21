import React from "react";
import { image51 } from "../assets";

const Testimonial = () => (
  <div id="aboutus" className="flex sm:flex-row flex-col-reverse justify-between items-center  bg-[#80E2FF] w-full  h-[1100px] sm:h-[752px] sm:py-[100px] sm:px-[135px] py-0 px-0">
    <div className="flex flex-col justify-start sm:w-[570px] sm:h-[440px] w-[339px] h-[312px] relative sm:top-0 top-[-150px]">
      <h1 className="font-manrope font-bold sm:text-[42px] sm:leading-[46px] text-primary mb-[50px] text-[26px] leading-[30px]">
        What’s Our Customer Say
      </h1>
      <p className="font-manrope font-medium italic sm:text-[22px] text-[16px] sm:leading-[36px] leading-[24px] text-primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex justify-center items-start sm:my-10 my-0 mt-[38px]">

      <div className="sm:w-[570px] w-[339px] h-[3px] bg-[#33D1FF] rounded-[1px] " />
      </div>
      <div className="flex flex-row justify-between items-center sm:mt-0 mt-[40px]">
        <div className="flex flex-col">
          <h1 className="font-manrope font-semibold text-[22px] text-primary leading-[32px]">
            Annara Veirmont
          </h1>
          <p className="font-manrope font-normal text-[16px] leading-[28px] text-primary">
            23 years of Age
          </p>
        </div>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            class="w-[50px] h-[50px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            class="w-[50px] h-[50px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
    <img src={image51} alt='lays' className="w-[470px] h-[552px] sm:mt-0 mt-[55px]"/>
  </div>
);

export default Testimonial;
