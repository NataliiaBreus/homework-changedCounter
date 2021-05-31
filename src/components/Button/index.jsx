import React from "react";
import style from "./Button.module.scss";

function Button(props) {
  const { caption, handler } = props;
  return <button className={style.blueBtn} onClick={handler}>{caption}</button>;
}

export default Button;
