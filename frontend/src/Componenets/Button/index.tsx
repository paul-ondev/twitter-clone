import React from "react";

import "./../Button/Button.scss";

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>;
}

export default Button;
