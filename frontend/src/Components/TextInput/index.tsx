import React from "react";

import classNames from "classnames";

import "../TextInput/TextInput.scss";

interface TextInputProps {
  id: string;
  name: string;
  type?: string;
  className?: string;
}

const TextInput = ({ id, type = "text", className, name }: TextInputProps) => {
  return (
    <div
      className={classNames("textInput", {
        [`${className}`]: className || false,
      })}
    >
      <input id={id} className="textInput__input" type={type} placeholder=" " />
      <label className="textInput__label" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default TextInput;
