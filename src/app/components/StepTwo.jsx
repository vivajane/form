import React from "react";
import ComProps from "./ComProps";
import { RiVipCrown2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Button from "./Button";

const StepTwo = ({ PrevStep, NextStep }) => {
  return (
    <div className="bg-black h-screen text-white">
      <ComProps />
      <div className="py-10 text-center">
        <h1 className="font-medium text-2xl text-[#AAAAAA]">
          What type of ticket do you want?
        </h1>
        <div className="flex justify-center py-8 gap-14">
          <div className="bg-[#2b1d1d] rounded-md px-6 py-6">
            <RiVipCrown2Fill size={50} />
            <h1>Business</h1>
          </div>
          <div className="bg-[#2b1d1d] rounded-md px-6 py-6">
            <CgProfile size={50} />
            <h1>Economy</h1>
          </div>
        </div>
      </div>
      <div className="flex py-8 justify-center gap-4">
        <Button className="cursor-pointer" onClick={PrevStep} variants="secondary">Previous</Button>
        <Button className="cursor-pointer" onClick={NextStep} variants="primary">Next</Button>
    
      </div>
    </div>
  );
};

export default StepTwo;
