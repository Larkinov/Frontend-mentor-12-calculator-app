import React from "react";
import style from "./Input.module.css";

const Input = (props) => {

  const onChange = (event) => {
    props.setValue(event.target.value);
  };
  let className = style.input;

  switch (props.style) {
    case "bill":
      className += " " + style.inputBill;
      break;
    case "number":
      className += " " + style.inputNumber;
      break;
    case "custom":
      className += " " + style.inputCustom;
      break;
  }
  return (
    <div>
      <p>{props.title}</p>
      <input
        type="number"
        className={className}
        placeholder={props.placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
