import React from "react";
import {
  setLocalStoreKeyValue,
  getLocalStoreKey,
} from "../../helpers/localStorage";
import { isValidEmail, isValidPassword } from "../../helpers/validation";
import Input from "../Input/Input"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:
        typeof getLocalStoreKey("email") !== "undefined"
          ? getLocalStoreKey("email")
          : "",
      password:
        typeof getLocalStoreKey("password") !== "undefined"
          ? getLocalStoreKey("password")
          : "",

      isValidEmail: false,
      isValidPassword: false,

      emailError: "",
      passwordError: "",
      errorMessage: "",
    };
  }

  // Inputs values from Local Storage
  getEmailfromLocal = (event) => {
    setLocalStoreKeyValue("email", event.target.value);
    this.setState({ email: event.target.value });
  };

  getPasswordfromLocal = (event) => {
    setLocalStoreKeyValue("password", event.target.value);
    this.setState({ password: event.target.value });
  };

  //Check part
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });

    const isValid = isValidEmail(event.email);
    if (isValid) {
      isValidEmail = true;
      event.emailError = "";
    } else {
      event.emailError = "Wrong password";
    }
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });

    const isValid = isValidEmail(event.password);
    if (isValid) {
      isValidPassword = true;
      event.passwordError = "";
    } else {
      event.passwordError = "Wrong email";
    }
  };

  handleLogin = () => {
    if (isValidEmail && isValidPassword) {
      this.setState({ errorMessage: "Congrats you are Login successfully" });
    } else {
      this.setState({ errorMessage: "Please try again" });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="inputs">

          <p>Login Form</p>
          <div className="emailInput">
            <Input
              type="text"
              placeholder="email..."
              onChange={this.handleEmail}
            />
            <span>{this.emailError}</span>
          </div>

          <div className="passwordInput">
            <Input
              type="text"
              placeholder="password..."
              onChange={this.handlePassword}
            />
            <span>{this.passwordError}</span>
          </div>
        </div>

        <div className="button">
          <button onChange={this.handleLogin}>Login</button>
          <span>{this.errorMessage}</span>
        </div>
      </div>
    );
  }
}

export default LoginForm;
