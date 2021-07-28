import React, { Component } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import DataService from "./DataService";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      email: "",
      errorMsg: "",
      radioButtonValue: "",
      Admin: false,
      buttonDisabled: false,
      isClicked: false,
    };
    this.onValueChangeAdmin = this.onValueChangeAdmin.bind(this);
    this.onValueChangeUser = this.onValueChangeUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  setInputValue(property, val) {
    val = val.trim();
    this.setState({
      [property]: val,
    });
  }

  onValueChangeAdmin(e) {
    this.setState({
      radioButtonValue: e.target.value,
      Admin: true,
    });
  }
  onValueChangeUser(e) {
    this.setState({
      radioButtonValue: e.target.value,
      Admin: false,
    });
  }

  registerUser() {
    this.setState({ isClicked: true });
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      admin: this.state.Admin,
    };
    DataService.signUpUser(data)
      .then((response) => {
        if (response.status === 200 && this.state.admin === true)
          this.props.history.push("/login");
        if (response.status === 200 && this.state.admin === false)
          this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error registering user" });
        console.log(this.state.errorMsg);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="loginForm">
            Sign Up
            <div className="radioButton">
              <label>
                <input
                  type="radio"
                  value="Admin"
                  name="rights"
                  checked={this.state.radioButtonValue === "Admin"}
                  onChange={this.onValueChangeAdmin}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  value="User"
                  name="rights"
                  checked={this.state.radioButtonValue === "User"}
                  onChange={this.onValueChangeUser}
                />
                User
              </label>
            </div>
            <InputField
              type="text"
              placeholder="Name"
              value={this.state.name ? this.state.name : ""}
              onChange={(val) => this.setInputValue("name", val)}
            />
            <InputField
              type="email"
              placeholder="Email"
              value={this.state.email ? this.state.email : ""}
              onChange={(val) => this.setInputValue("email", val)}
            />
            <InputField
              type="Password"
              placeholder="Password"
              value={this.state.password ? this.state.password : ""}
              onChange={(val) => this.setInputValue("password", val)}
            />
            <SubmitButton
              text="Sign Up"
              disabled={this.state.buttonDisabled}
              onClick={() => this.registerUser()}
            />
          </div>
          {/* {this.loadLoginError()} */}
        </div>
      </div>
    );
  }
}
