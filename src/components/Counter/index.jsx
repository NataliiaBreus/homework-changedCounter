import React, { useState, useEffect } from 'react';
import style from './counter.modules.scss';
import Button from './Button';
import ControlledNumInput from './ControlledNumInput';
import PropTypes from 'prop-types';

function Counter (props) {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [isIncrement, setIsIncrement] = useState(true);
  const [isAutoClick, setIsAutoClick] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [clickPerSecond, setClickPerSecond] = useState(1);
  const [timer, setTimer] = useState(null);

  const toggleMode = () => setIsIncrement(!isIncrement);
  const toggleAutoClick = () => setIsAutoClick(!isAutoClick);

  const handleCount = () =>
    isIncrement ? setCounter(counter + step) : setCounter(counter - step);

  const handleChangeDelay = newValue => {
    setClickPerSecond(newValue);
    setDelay(1000 / newValue);
  };

  function Step (props) {
    const { step, setStep } = props;
    return (
      <>
        <div>Step: {step}</div>
        <ControlledNumInput
          caption='Set step'
          value={step}
          setValue={setStep}
          min={1}
          max={100}
        />
      </>
    );
  }
  Step.defaultProps = {
    step: 1,
    setStep: () => {},
  };

  useEffect(() => {
    if (isAutoClick) {
      setTimer(setTimeout(handleCount, delay));
    }
  }, [isIncrement, isAutoClick, delay, step, counter]);

  useEffect(() => {
    clearTimeout(timer);
  }, [isIncrement, delay, step, isAutoClick]);

  const countButtonCaption = isIncrement ? 'Increment' : 'Decrement';

  return (
    <>
      <div className={style.counter}>Counter:{counter}</div>
      <Step step={step} setStep={setStep} />
      <ControlledNumInput
        caption='Number of click per second'
        value={clickPerSecond}
        setValue={handleChangeDelay}
        min={1}
        max={1000}
      />
      <p>Auto click mode: {isAutoClick ? 'Enabled' : 'Disabled'}</p>
      <div className={style.buttons}>
        <Button handler={toggleMode} text={'Change mode'} />
        <Button handler={handleCount} text={countButtonCaption} />
        <Button handler={toggleAutoClick} text='Auto click' />
      </div>
    </>
  );
}

export default Counter;
