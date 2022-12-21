import React from "react";
import { image41, image42 } from "../assets";

const Videosection = () => (
  <div id="videos"className="flex flex-col justify-center items-center  sm:mt-[150px] mt-[100px]">
    <div className="sm:w-[1170px] sm:h-[750px] w-[339px] h-[556px] justify-center items-center">
      <h1 className="font-manrope font-bold sm:text-[42px] sm:leading-[46px] text-center text-primary text-[30px] leading-[30px] sm:mb-5 mb-3">
        Our Popular Crisps
      </h1>
      <div className="flex justify-between sm:flex-row flex-none  sm:mt-[70px] mt-[40px]">
        <div className=" justify-start items-start sm:w-[570px] sm:h-[654px] w-[339px] h-[446px]">
          <img
            src={image41}
            alt="lays"
            className="sm:w-[570px] sm:h-[564px] w-[339px] h-[336px] mb-5"
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-manrope font-semibold text-[22px] leading-[32px] text-primary sm:w-[387px] sm:h-[32px] w-[339px] h-[64px]">
              LAY’S® Wavy Ondulees Salt & Vinegar
            </h1>
            <div className="flex flex-row justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="font-manrope font-normal text-[16px] leading-[28px] text-primary">
                Play Video
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block  w-[570px] h-[544px] relative top-[110px]">
          <img
            src={image42}
            alt="lays"
            className="w-[570px] h-[454px] mb-5"
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-manrope font-semibold text-[22px] leading-[32px] text-primary sm:w-[387px] sm:h-[32px] w-[339px] h-[64px]">
            LAY’S® Beers and Cigar
            </h1>
            <div className="flex flex-row justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="font-manrope font-normal text-[16px] leading-[28px] text-primary">
                Play Video
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between items-center w-[96px] h-[4px] mt-[48px]">
      <div className="w-[28px] h-[4px] bg-[#D5DDDF] rounded-sm" />
      <div className="w-[28px] h-[4px] bg-[#182327] rounded-sm" />
      <div className="w-[28px] h-[4px] bg-[#D5DDDF] rounded-sm" />
    </div>
  </div>
);

export default Videosection;
