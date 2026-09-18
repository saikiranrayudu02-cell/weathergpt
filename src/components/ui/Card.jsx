import React from "react";

export const Card = ({ children, className = "", hover = false, ...props }) => {
  return (
    <div
      className={`ui-card ${hover ? "ui-card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
