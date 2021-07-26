import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AdminDashboard from "./AdminDashboard";
import DataService from "./DataService";

const useStyles = withStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

export default class MapCompanyCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      stockExchangeName: "",
      companyCode: "",
      errorMsg: "",
    };
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleStockExchangeNameChange =
      this.handleStockExchangeNameChange.bind(this);
    this.handleCompanyCodeChange = this.handleCompanyCodeChange.bind(this);
    this.mapCompanyCode = this.mapCompanyCode.bind(this);
  }

  handleCompanyNameChange(e) {
    console.log(e.target.value);
    this.setState({
      companyName: e.target.value,
    });
  }
  handleStockExchangeNameChange(e) {
    console.log(e.target.value);
    this.setState({
      stockExchangeName: e.target.value,
    });
  }
  handleCompanyCodeChange(e) {
    console.log(e.target.value);
    this.setState({
      companyCode: e.target.value,
    });
  }

  mapCompanyCode() {
    var data = {
      companyName: this.state.companyName,
      stockExchangeName: this.state.stockExchangeName,
      companyCode: this.state.companyCode,
    };
    DataService.mapThisCompanyCode(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error registering user" });
        console.log(this.state.errorMsg);
      });
  }

  render() {
    return (
      <div>
        <AdminDashboard />
        <div className="addCompany">
          <div className="form">
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  id="standard-basic"
                  label="Company Name"
                  value={this.state.companyName ? this.state.companyName : ""}
                  onChange={this.handleCompanyNameChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Stock Exchange Name"
                  value={
                    this.state.stockExchangeName
                      ? this.state.stockExchangeName
                      : ""
                  }
                  onChange={this.handleStockExchangeNameChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Company Code"
                  value={this.state.companyCode ? this.state.companyCode : ""}
                  onChange={this.handleCompanyCodeChange}
                />
              </div>
              <div className="addSectorButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.mapCompanyCode()}
                >
                  Map
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
