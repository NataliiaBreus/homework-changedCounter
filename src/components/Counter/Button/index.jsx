import React from "react";
import style from "./Button.module.scss";
import PropTypes from 'prop-types';

function Button(props) {
  const { handler, text } = props;
  return (
    <button className={style.button} onClick={handler}>{text}</button>
    );
}

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default Button;
