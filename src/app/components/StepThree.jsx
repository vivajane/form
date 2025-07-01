import React from "react";
import ComProps from "./ComProps";
import Button from "./Button";

const StepThree = ({ PrevStep, NextStep}) => {
  return (
    <div>
      <ComProps />
      <div className="min-h-screen w-full bg-black text-white py-10 px-4">
        <div className="w-full max-w-4xl mx-auto bg-[#1b2231] border border-[#FFFFFF33] rounded-lg shadow-lg overflow-hidden">
          <h1 className="text-center bg-[#2c344b] text-xl font-semibold py-4 border-b border-[#FFFFFF33]">
            Ticket Information
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base text-left">
              <thead className=" text-white uppercase">
                <tr>
                  <th className="px-4 py-3">From</th>
                  <th className="px-4 py-3">To</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Miles</th>
                  <th className="px-4 py-3">Gift Miles</th>
                </tr>
              </thead>
              <tbody className="py-6">
                <tr className="border-t border-gray-600 hover:bg-[#2b2b2b] transition">
                  <td className="px-4 py-3">Moskovo</td>
                  <td className="px-4 py-3">Madrid</td>
                  <td className="px-4 py-3">Business</td>
                  <td className="px-4 py-3">01/01/2023</td>
                  <td className="px-4 py-3">$1000</td>
                  <td className="px-4 py-3">1000</td>
                  <td className="px-4 py-3">1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex py-16 justify-center gap-4">
        <Button className="cursor-pointer" onClick={PrevStep} variants="secondary">Previous</Button>
        <Button className="cursor-pointer" onClick={NextStep} variants="primary">Next</Button>
    
      </div>
      </div>
        
    </div>
  );
};

export default StepThree;
