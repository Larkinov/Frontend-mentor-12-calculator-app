import React from "react";
import style from "./PanelSelect.module.css";
import Select from "../Buttons/Select";
import Input from "../Input/Input";

const PanelSelect = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <div className={style.panelSelect}>
        <Select text={"5"} onclick={onclick} setTip={props.setTip}/>
        <Select text={"10"} onclick={onclick} setTip={props.setTip}/>
        <Select text={"15"} onclick={onclick} setTip={props.setTip}/>
        <Select text={"25"} onclick={onclick} setTip={props.setTip}/>
        <Select text={"50"} onclick={onclick} setTip={props.setTip}/>
        <Input style={"custom"} placeholder={"Custom"} setValue={props.setTip}/>
      </div>
    </div>
  );
};

export default PanelSelect;
