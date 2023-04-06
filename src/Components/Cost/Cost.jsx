import React from "react";
import style from "./Cost.module.css";

const Cost = (props) => {
  return (
    <div>
      <div className={style.costPanel}>
        <div>
          <p className={style.title}>{props.title}</p>
          <p className={style.percent}>/ percent</p>
        </div>
        <p className={style.cost}>${props.cost}</p>
      </div>
    </div>
  );
};

export default Cost;
