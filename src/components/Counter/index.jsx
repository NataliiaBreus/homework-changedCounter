import React, { useState, useEffect } from "react";
import style from './counter.modules.scss';
import Button from "./Button";
import PropTypes from 'prop-types';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("used effect");
    return () => console.log("unmount");
  }, [step]);

  return (
    <>
      <div>{counter}</div>
      <button className={style.button} onClick={() => setStep(step + 1)}>+ Шаг</button>
      
      <button className={style.button} onClick={() => setCounter(counter + step)}>Добавить</button>
    </>
  );
}

export default Counter;
