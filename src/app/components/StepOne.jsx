"use client";
import React, { useState } from "react";
import ComProps from "./ComProps";
import { CiSearch } from "react-icons/ci";
import { FaRightFromBracket, FaArrowRightToBracket } from "react-icons/fa6";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import Button from "./Button";
import { MdNavigateNext } from "react-icons/md";

const StepOne = ({ formData, setFormData, NextStep }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, departfrom, return: returnDate } = formData;

    if (!from || !to || !departfrom || !returnDate) {
      setError("All fields are required.");
      return;
    }

    setError("");
    NextStep();
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-start pt-10 px-4">
      <ComProps />
      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-8 mt-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="from" className="flex items-center gap-1 text-[#FFFFFFCC]">
              <FaRightFromBracket /> From
            </label>
            <div className="relative">
              <CiSearch className="absolute top-2.5 right-3 text-[#AAAAAA]" />
              <input
                placeholder="country, city or airport"
                className="bg-white text-black py-2 placeholder:text-[#AAAAAA] rounded-full px-4 w-full"
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="to" className="flex items-center gap-1 text-[#FFFFFFCC]">
              <FaArrowRightToBracket /> To
            </label>
            <div className="relative">
              <CiSearch className="absolute top-2.5 right-3 text-[#AAAAAA]" />
              <input
                placeholder="country, city or airport"
                className="bg-white text-black py-2 placeholder:text-[#AAAAAA] rounded-full px-4 w-full"
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="departfrom" className="flex items-center gap-1 text-[#FFFFFFCC]">
              <HiOutlineCalendarDateRange /> Depart Date
            </label>
            <div className="relative">
              <IoMdTime className="absolute top-2.5 right-3 text-[#AAAAAA]" />
              <input
                className="bg-white text-black py-2 placeholder:text-[#AAAAAA] rounded-full px-4 w-full"
                type="date"
                name="departfrom"
                value={formData.departfrom}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="return" className="flex items-center gap-1 text-[#FFFFFFCC]">
              <HiOutlineCalendarDateRange /> Return Date
            </label>
            <div className="relative">
              <IoMdTime className="absolute top-2.5 right-3 text-[#AAAAAA]" />
              <input
                className="bg-white text-black py-2 placeholder:text-[#AAAAAA] rounded-full px-4 w-full"
                type="date"
                name="return"
                value={formData.return}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="text-center">
          <Button type="submit" variants="primary" className="mt-6 mx-auto flex items-center justify-center gap-2">
            Next <MdNavigateNext />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
