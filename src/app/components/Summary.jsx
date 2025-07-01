"use client";
import React from "react";
import Button from "./Button";
import { MdNavigateBefore } from "react-icons/md";

const Summary = ({ formData, PrevStep }) => {
  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log(formData);
    PrevStep();
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl bg-[#1b2231] p-6 rounded-lg border border-[#FFFFFF33] shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-6">Summary</h2>
        <ul className="space-y-3 text-base">
          <li><strong>From:</strong> {formData.from}</li>
          <li><strong>To:</strong> {formData.to}</li>
          <li><strong>Depart Date:</strong> {formData.departfrom}</li>
          <li><strong>Return Date:</strong> {formData.return}</li>
          <li><strong>Flight Type:</strong> {formData.flightType}</li>
          <li><strong>Name:</strong> {formData.name}</li>
          <li><strong>Email:</strong> {formData.email}</li>
        </ul>

        <div className="flex justify-between mt-8">
          <Button onClick={PrevStep} variants="secondary" className="flex items-center gap-2">
            <MdNavigateBefore /> Back
          </Button>
          <Button onClick={handleSubmit} variants="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
