import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const[toggle,setToggle] =useState(false);
  return (
    <div className="w-full h-[112px] flex flex-row justify-between items-center py-4 px-9">
      <div className="mr-[42px]">
        <a href="#home" className="cursor-pointer"><img src={logo} alt="logo" className="w-[40px] h-[38px] logo-drop" /></a>
      </div>
      <ul className="list-none sm:flex hidden  items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-manrope font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text_c mr-10 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex  justify-between items-center  ">
        <div className=" flex-1 sm:flex hidden  search-bar flex-row items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search collection, item or user"
            className="w-[215px]"
          />
        </div>
      </div>
      <div className="sm:flex hidden  flex-row justify-between items-center pl-6">
        <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-primary mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <button className="bg-primary w-[107px] h-[42px] text-white font-manrope font-normal text-[16px] leading-7 text-center rounded-lg">Sign Up</button>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  bg-black absolute top-20 right-0 justify-center items-center my-2 w-full z-10 rounded-xl sidebar`}
        > 
        <div className="flex flex-col justify-center items-center my-11">
          <div className=" flex flex-row justify-center items-center pl-6">
        <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-primary mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <button className="bg-primary w-[107px] h-[42px] text-white font-manrope font-normal text-[16px] leading-7 text-center rounded-lg">Sign Up</button>
        </div>
          <ul className="list-none flex flex-col justify-end items-center flex-1 m-8">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
