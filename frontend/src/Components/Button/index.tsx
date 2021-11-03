import React from "react";

import classnames from "classnames";

import "./Button.scss";

interface ButtonProps {
  children: string;
  outlined?: boolean;
}

function Button({ children, outlined }: ButtonProps) {
  return (
    <button className={classnames("button", { "button--outlined": outlined })}>
      {children}
    </button>
  );
}

export default Button;
