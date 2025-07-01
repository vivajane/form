import React from "react";
import { Inter } from "next/font/google";

const ComProps = ({setStep, step}) => {
  return (
    <div className=" bg-black py-8 text-sm md:text-base text-white  text-center  ">
      <div className="lg:px-38 md:px-28 sm:px-16 px-8 p-4">
        <h1 className="font-medium md:text-2xl">
          Search Flights, Cheapest Flights
        </h1>
        <p className="font-light text-[#AAAAAA] font-sans text-base">
          All the plane tickets you are looking for together!
        </p>
      </div>
      <div className="pt-8 text-[#AAAAAA] w-full">
        <div className="flex justify-center items-center">
          <hr className="border-t-3 border-[#13B7CC] md:w-20 w-10 " />

         <div className="bg-[#13B7CC]  md:w-14 md:h-14 w-8 h-6 rounded-full">
           <img className="text-center md:pt-3 md:pl-3" src="/images/fo.png" alt="fo" />
         </div>
          <hr className="border-t-3 border-[#AAAAAA] w-20 " />
          <img src="/images/ft.png" alt="ftw" />
          <hr className="border-t-3 border-[#AAAAAA] w-20 " />
          <img src="/images/ftw.png" alt="ftw" />
          <hr className="border-t-3 border-[#AAAAAA] w-20 " />

          <img src="/images/ff.png" alt="ff" />
          <hr className="border-t-3 border-[#AAAAAA] w-20 " />

          <img src="/images/ffi.png" alt="ffi" />
          <hr className="border-t-3 border-[#AAAAAA] w-20  " />
        </div>
      </div>
    </div>
  );
};

export default ComProps;
