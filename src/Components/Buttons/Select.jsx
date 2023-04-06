import React from "react";
import style from "./Select.module.css";

const Select = (props) => {
  const click = () => {
    props.setTip(props.text);
  };

  let className = style.select;
  if (props.type === "reset") {
    className = style.reset + " " + style.resetNoActive;
  }

  return (
    <div className={className} onClick={click}>
      {props.text}%
    </div>
  );
};

export default Select;
