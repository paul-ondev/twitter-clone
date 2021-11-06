import React from "react";

import classnames from "classnames";

import "./Button.scss";

interface IconButtonProps {
  children: React.SVGProps<SVGSVGElement>;
  onClick: () => void;
}

function IconButton({ children, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classnames("button", "button--closeIcon")}
    >
      {children}
    </button>
  );
}

export default IconButton;
