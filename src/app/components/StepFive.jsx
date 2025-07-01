import React from "react";
import ComProps from "./ComProps";
import { CiHome } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaHandshakeSimple } from "react-icons/fa6";
import Button from "./Button";
const StepFive = ({ PrevStep, NextStep }) => {
  return (
    <div>
      <ComProps />
      <div className="bg-black  text-white mx-auto h-screen">
        <div className="min-h-screen w-3/6 mx-auto bg-black">
          <h1 className="text-center text-[#FFFFFFCC] text-xl font-semibold py-4 ">
            Who do you want to help?
          </h1>
          <div className="flex justify-center py-8 gap-14">
            <div className="bg-[#2b1d1d] rounded-md px-6 py-6">
              <CiHome size={50} />
              <h1>Business</h1>
            </div>
            <div className="bg-[#2b1d1d] rounded-md px-6 py-6">
              <TbWorld size={50} />
              <h1>Economy</h1>
            </div>
          </div>
          <div className="flex justify-center py-8 gap-14">
            <div className="bg-[#2b1d1d] rounded-md px-6 py-6">
              <FaHandshakeSimple size={50} />
              <h1>Business</h1>
            </div>
            <div className="bg-[#2b1d1d] rounded-md px-6 py-6">
              <CiHome size={50} />
              <h1>Economy</h1>
            </div>
          </div>
            <div className="flex py-12  justify-center gap-4">
            <Button
              className="cursor-pointer"
              onClick={PrevStep}
              variants="secondary"
            >
              Previous
            </Button>
            <Button
              className="cursor-pointer"
              onClick={NextStep}
              variants="primary"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
