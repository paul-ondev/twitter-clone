import React from "react";

import classnames from "classnames";

import "./Button.scss";

interface ButtonProps {
  children: string;
  outlined?: boolean;
  onClick?: () => void;
  className?: string;
}

function Button({ children, outlined, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classnames(
        "button",
        { "button--outlined": outlined },
        {
          [`${className}`]: className || false,
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
