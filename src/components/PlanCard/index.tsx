import React from "react";

import "./style.css";
import { Button } from "../Button";

type PlanCardProps = {
  title: string;
  price: number;
  description: string;
  buttonLabel?: string;
  darken?: boolean;
};

export const PlanCard = ({
  title,
  price,
  description,
  buttonLabel = "Assinar",
  darken = false,
}: PlanCardProps) => (
  <div className={`plan-card ${darken ? "darken" : ""}`}>
    <h5>{title}</h5>
    <span className="price">{price}</span>
    <p>{description}</p>
    <Button size="small">{buttonLabel}</Button>
  </div>
);
