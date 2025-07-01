"use client";

import ComProps from "./components/ComProps";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Summary from "./components/Summary";
import { useState } from "react";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departfrom: "",
    return: "",
   
   
  });

  const NextStep = () => setStep((prev) => prev + 1);
  const PrevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          NextStep={NextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          NextStep={NextStep}
          PrevStep={PrevStep}
        />
      )}
      {step === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          NextStep={NextStep}
          PrevStep={PrevStep}
        />
      )}
      {step === 4 && (
        <StepFour
          formData={formData}
          setFormData={setFormData}
          NextStep={NextStep}
          PrevStep={PrevStep}
        />
      )}
      {step === 5 && (
        <StepFive
          formData={formData}
          setFormData={setFormData}
          NextStep={NextStep}
          PrevStep={PrevStep}
        />
      )}
      {step === 6 && <Summary formData={formData} PrevStep={PrevStep} />}
    </div>
  );
}
