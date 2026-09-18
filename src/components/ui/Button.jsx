import React from "react";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  type = "button",
  ...props
}) => {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
