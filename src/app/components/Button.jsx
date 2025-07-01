"use client";
import React from "react";
import clsx from "clsx";

const Button = ({ children, variants = "primary", className = "", sizes = "md", ...props }) => {
  const variantClasses = {
    primary: "text-white font-semibold bg-[#13B7CC] py-2 rounded-full text-lg hover:text-white hover:scale-110 duration-300",
    secondary: "text-[#00000099]  bg-white py-2 rounded-full text-lg hover:text-black hover:scale-110 duration-300", // "text-white font-semibold bg-white text-lg hover:text-white hover:scale-110 duration-300",
  };

  const sizeClasses = {
    sm: "w-30",
    md: "w-40",
  };

  return (
    <button
      className={clsx(variantClasses[variants], sizeClasses[sizes], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
