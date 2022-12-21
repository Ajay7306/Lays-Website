import React from "react";
import { image2, image20, star } from "../assets";

const Features = () => (
  <div id="features" className="flex sm:flex-row flex-col justify-center items-center">
    <div className="flex flex-col items-start sm:mr-40 mr-0">
      <h1 className="font-manrope font-bold sm:text-[42px] text-[26px] sm:leading-[46px]  leading-[30px] text-[#182327] sm:w-[570px] w-[339px] h-[60px] sm:h-[92px] sm:mb-[70px] mb-[40px]">
        We Provide the Tasty and <br className="sm:block hidden" />
        best Chips for you!{" "}
      </h1>
      <img src={image2} alt="lays_BLT" className="sm:w-[570px] w-[339px] sm:h-[564px] h-[335px]" />
    </div>
    <div className="flex flex-col">
      <div className="flex justify-end items-center mb-[47px] relative left-0 sm:top-0 top-[-390px]">
        <img src={image20} alt="lays" className="sm:w-[333px] w-[75px] sm:h-[145px] h-[33px]" />
      </div>
      <div className="flex flex-col justify-start text-start w-[339px] h-[358px] sm:w-[470px] sm:h-[360px]">
        <h1 className="font-manrope font-bold text-[22px] leading-[26px] text-primary w-[225px] h-[26px] mb-3">
          LAY'S® BLT Flavored
        </h1>
        <img src={star} alt="star" className="w-[114px] h-[18px] mb-4" />
        <p className="font-manrope font-normal text-[16px] leading-[28px] text-[#5D696D] w-[38px] h-[28px] mb-[10px]">
          Price
        </p>
        <h3 className="font-manrope font-bold text-[22px] leading-[26px] w-[60px] h-[26px] text-primary mb-4">
          $3.93
        </h3>
        <p className="font-manrope font-normal sm:text-[16px] text-[14px] sm:leading-[28px] leading-[24px] text-[#5d696d] sm:w-[470px] w-[339px] sm:h-[112px] h-[120px] mb-4">
          It all starts with farm-grown potatoes, cooked and seasoned to
          perfection. Then we add the sweet taste of honey and the spicy kick of
          BBQ sauce. So every LAY'S potato chip is perfectly crispy and
          delicious. Happiness in Every Bite.
        </p>
        <div className="flex flex-row w-[270px] h-[60px] items-center">
          <button className="bg-primary text-white font-manrope font-normal w-[146px] h-[60px] text-[18px] leading-[30px] text-center rounded">
            BuyNow
          </button>
          <div className="w-[196px] h-[30px] flex justify-center items-center">
            <p className="font-manrope font-semibold text-[18px] leading-[30px]  text-primary pl-5 pr-1">
              See More
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
