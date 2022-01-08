import React from "react";

import "./style.css";

type ButtonProps = {
  children: React.ReactNode;
  size?: "default" | "small";
};

export const Button = ({ children, size = "default" }: ButtonProps) => {
  const paddingValue = size === "default" ? "16px 0" : "8px 0";

  return (
    <button className="btn" style={{ padding: paddingValue }}>
      {children}
    </button>
  );
};
