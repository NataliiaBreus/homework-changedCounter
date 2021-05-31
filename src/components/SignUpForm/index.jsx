import React, { Component } from "react";
import style from "./SignUpForm.module.scss";
import FormInput from "./FormInput";
import * as constants from '../../constants';

const intialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...intialValues };
  }

  submitHandler = (event) => {
    const { registerUser } = this.props;
    event.preventDefault();
    registerUser({ ...this.state });
    this.setState({ ...intialValues });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { firstname, lastname, email, password } = this.state;
    return (
      <form className={style.container} onSubmit={this.submitHandler}>
        <FormInput
          name="firstname"
          value={firstname}
          onChange={this.handleChange}
          validationRegex={constants.REGEX_NAME}
          placeholder="Введите имя"
        />
        <FormInput
          name="lastname"
          value={lastname}
          validationRegex={constants.REGEX_NAME}
          onChange={this.handleChange}
          placeholder="Введите фамилию"
        />
        <FormInput
          name="email"
          value={email}
          validationRegex={constants.REGEX_EMAIL}
          onChange={this.handleChange}
          placeholder="Введите email"
          type="email"
        />
        <FormInput
          name="password"
          value={password}
          validationRegex={constants.REGEX_PASSWORD}
          onChange={this.handleChange}
          placeholder="Введите пароль"
          type="password"
        />
        <input className={style.input} type="submit" />
      </form>
    );
  }
}

export default SignUpForm;

/*
  1. Написать функции-обработчики изменений имени, фамилии, email.
  2. Реализовать удаление пробелов во всех полях.
  3. Добавить валидацию этих полей.
*/
