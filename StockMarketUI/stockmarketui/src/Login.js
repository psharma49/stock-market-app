import React, { Component } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import DataService from "./DataService";
import AuthenticationService from "./AuthenticationService";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      acusername: "",
      acpassword: "",
      buttonDisabled: false,
      errorMsgLogin: "",
      errorMsgLogin1: "",
      errorMsgLogin2: "",
      isClicked: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    this.setState({
      [property]: val,
    });
  }
  ontoSignUp() {
    this.props.history.push("/Signup");
  }

  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
    this.loadLoginError = this.loadLoginError.bind(this);
  }
  loadLoginError() {
    if (this.state.errorMsgLogin !== "" && this.state.isClicked === true) {
      return (
        <label className="errorMsgLogin">{this.state.errorMsgLogin}</label>
      );
    }
    if (this.state.username === "" && this.state.isClicked === true) {
      return (
        <label className="errorMsgLogin1">{this.state.errorMsgLogin1}</label>
      );
    }
    if (this.state.password === "" && this.state.isClicked === true) {
      return (
        <label className="errorMsgLogin2">{this.state.errorMsgLogin2}</label>
      );
    }
  }

  async doLogin() {
    this.setState({ isClicked: true });
    if (!this.state.username) {
      this.setState({
        errorMsgLogin1: "Please enter username",
        errorMsgLogin: "",
      });
    }
    if (!this.state.password) {
      this.setState({
        errorMsgLogin2: "Please enter password",
        errorMsgLogin: "",
      });
    }
    this.setState({
      buttonDisabled: true,
    });
    try {
      var data = {
        name: this.state.username,
        password: this.state.password,
      };
      DataService.checkUser(data)
        .then((res) => {
          if (res.status === 200) {
            AuthenticationService.registerSuccessfulLogin(this.state.username);
            this.setState({ errorMsgLogin: "" });
            this.props.history.push("/AdminDashboard");
          } else {
            this.resetForm();
            this.setState({ errorMsgLogin: "Invalid username or password" });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ errorMsg: "Can't login" });
          console.log(this.state.errorMsg);
          this.resetForm();
        });
    } catch (e) {
      console.log(e);
    }
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
              value={this.state.username ? this.state.username : ""}
              onChange={(val) => this.setInputValue("username", val)}
            />
            <InputField
              type="Password"
              placeholder="Password"
              value={this.state.password ? this.state.password : ""}
              onChange={(val) => this.setInputValue("password", val)}
            />
            <SubmitButton
              text="Login"
              disabled={this.state.buttonDisabled}
              onClick={() => this.doLogin()}
            />
            <SubmitButton
              text="Signup"
              disabled={this.state.buttonDisabled}
              onClick={() => this.ontoSignUp()}
            />
          </div>
          {this.loadLoginError()}
        </div>
      </div>
    );
  }
}
