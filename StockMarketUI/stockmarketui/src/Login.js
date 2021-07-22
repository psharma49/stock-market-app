import React, { Component } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div>Welcome to Stock Market Charting App</div>
        <div className="container">
          <div className="loginForm">
            <div className="loginName">Log in</div>
            <InputField
              type="text"
              placeholder="Username"
              //   value={this.state.username ? this.state.username : ""}
              //   onChange={(val) => this.setInputValue("username", val)}
            />
            <InputField
              type="Password"
              placeholder="Password"
              //   value={this.state.password ? this.state.password : ""}
              //   onChange={(val) => this.setInputValue("password", val)}
            />
            <SubmitButton
              text="Login"
              //   disabled={this.state.buttonDisabled}
              //   onClick={() => this.doLogin()}
            />
            <SubmitButton
              text="Signup"
              //   disabled={this.state.buttonDisabled}
              //   onClick={() => this.doLogin()}
            />
          </div>
          {/* {this.loadLoginError()} */}
        </div>
      </div>
    );
  }
}
