import React from "react";

import classnames from "classnames";

import "./Button.scss";

interface IconButtonProps {
  children: React.SVGProps<SVGSVGElement>;
}

function IconButton({ children }: IconButtonProps) {
  return (
    <button className={classnames("button", "button--closeIcon")}>
      {children}
    </button>
  );
}

export default IconButton;
