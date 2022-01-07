import React from "react";

import "./style.css";

type WrapperProps = {
  children: React.ReactNode;
  bgColor?: "white" | "white-200";
};

export const Wrapper = ({ children, bgColor = "white" }: WrapperProps) => (
  <section className="wrapper" style={{ backgroundColor: `var(--${bgColor})` }}>
    <div className="content">{children}</div>
  </section>
);
