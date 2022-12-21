import React from "react";
import { star } from "../assets";
import { products } from "../constants";

const details = () => (
  <div className="justify-center items-center grid sm:grid-flow-col grid-flow-row  grid-rows-2  sm:gap-y-[60px] gap-y-[38px] gap-x-[30px] w-[339px] h-[3244px] sm:w-[1170px] sm:h-[1150px]">
    {products.map((product) => (
      <div
        key={product.id}
        className="w-[339px] h-[498px] sm:w-[370px] sm:h-[514px]"
      >
        <img
          src={product.image}
          alt="lays"
          className=" sm:w-[370px] w-[339px] sm:h-[400px] h-[372px] object-contain"
        />
        <div className="flex justify-end relative top-[-25px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-14 h-14"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
            clip-rule="evenodd"
          />
        </svg>
        </div>

        <div className="flex flex-col justify-start relative top-[-30px] ">
          <h1 className="font-manrope font-normal text-[22px] leading-[32px] text-primary">
            $3.93
          </h1>
          <p className="font-manrope font-normal text-[16px] leading-[28px] text-[#5D696D] my-2">
            {product.title}
          </p>
          <img src={star} alt="5star" className="w-[106px] h-[18px]" />
        </div>
      </div>
    ))}
  </div>
);

export default details;
