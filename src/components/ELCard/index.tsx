import React from "react";
import { CardProps } from "../../types";



export const ELCard: React.FC<CardProps> = ({ name, title, bgClass }) => {
  return (
    <div className={`card ${bgClass}`}>
      <h3 className="card-title">{name}</h3>
      <p className="card-subtitle">{title}</p>
    </div>
  );
};

