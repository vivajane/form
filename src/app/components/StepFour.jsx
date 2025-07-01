import React from "react";
import ComProps from "./ComProps";
import Button from "./Button";

const StepFour = ({ PrevStep, NextStep }) => {
  return (
    <div>
      <ComProps />
      <div className="bg-black  text-white mx-auto h-screen">
        <div className="min-h-screen w-3/6 mx-auto bg-black">
          <h1 className="text-center text-xl font-semibold py-4 ">
            Miles Responsibility
          </h1>
          <div className="md:flex py-8 text-sm gap-10">
            <img
              className="md:w-1/2"
              src="https://images.pexels.com/photos/316794/pexels-photo-316794.jpeg"
              alt="fl"
            />
            <p className="text-white pt-8 md:pt-0">
              Throughout the history, globalization and technological
              developments have always had a great effect on transportation.
              Today, everybody transports above the clouds and under the seas in
              more different ways and durations compared to past. While airplane
              was an extreme transportation vehicle for most of us only a
              quarter century ago, many people use it in their daily routines in
              today. Airlines organize so many campaigns like elastic schedules,
              promotion gifts and discounts to maintain this increase in number
              of people who fly regularly and often. Bonus miles is only one of
              them. Airlines offer bonus miles to the passenger in accordance
              with the length and frequency of their flights. However most of
              these miles go waste without growing enough to get a small gift
              like teddy bear let alone a free bonus ticket.
            </p>
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

export default StepFour;
