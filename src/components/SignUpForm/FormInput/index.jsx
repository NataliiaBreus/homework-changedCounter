import React from 'react';
import cx from 'classnames';
import style from './FormInput.module.scss';

export default function FormInput (props) {
  const {
    name,
    value,
    onChange = () => {},
    validationRegex,
    placeholder,
    type = 'text',
  } = props;
  const isValid = value.length === 0 || validationRegex.test(value);
  console.log(name, isValid);
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className={cx(style.input, { [style.invalidInput]: !isValid })}
      type={type}
      placeholder={placeholder}
    />
  );
}
