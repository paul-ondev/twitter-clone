import React from "react";

import classnames from "classnames";

import "./Button.scss";

interface ButtonProps {
  children: string;
  outlined?: boolean;
  onClick?: () => void;
}

function Button({ children, outlined, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classnames("button", { "button--outlined": outlined })}
    >
      {children}
    </button>
  );
}

export default Button;
