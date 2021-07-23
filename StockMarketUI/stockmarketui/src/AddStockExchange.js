import React, { Component } from "react";
import Box from "@material-ui/core/Box";
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

export default class AddStockExchange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockExchangeName: "",
      brief: "",
      remarks: "",
      contactAddress: "",
    };
    this.handleStockExchangeName = this.handleStockExchangeName.bind(this);
    this.handleBriefChange = this.handleBriefChange.bind(this);
    this.handleContactAddressChange =
      this.handleContactAddressChange.bind(this);
    this.handleRemarksChange = this.handleRemarksChange.bind(this);
  }

  handleStockExchangeName(e) {
    console.log(e.target.value);
    this.setState({
      stockExchangeName: e.target.value,
    });
  }
  handleBriefChange(e) {
    console.log(e.target.value);
    this.setState({
      brief: e.target.value,
    });
  }
  handleContactAddressChange(e) {
    console.log(e.target.value);
    this.setState({
      contactAddress: e.target.value,
    });
  }
  handleRemarksChange(e) {
    console.log(e.target.value);
    this.setState({
      remarks: e.target.value,
    });
  }

  addThisExchange() {
    var data = {
      stockExchangeName: this.state.stockExchangeName,
      brief: this.state.brief,
      contactAddress: this.state.contactAddress,
      remarks: this.state.remarks,
    };
    DataService.addAStockExchange(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error adding stock exchange user" });
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
                  label="Stock Exchange Name"
                  value={
                    this.state.stockExchangeName
                      ? this.state.stockExchangeName
                      : ""
                  }
                  onChange={this.handleStockExchangeName}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Brief"
                  value={this.state.brief ? this.state.brief : ""}
                  onChange={this.handleBriefChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Contact Address"
                  value={
                    this.state.contactAddress ? this.state.contactAddress : ""
                  }
                  onChange={this.handleContactAddressChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Remarks"
                  value={this.state.remarks ? this.state.remarks : ""}
                  onChange={this.handleRemarksChange}
                />
              </div>
              <div className="addCompanyButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.addThisExchange()}
                >
                  Add Stock Exchange
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
