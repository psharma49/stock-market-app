import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AdminDashboard from "./AdminDashboard";
import DataService from "./DataService";
import AuthenticationService from "./AuthenticationService";

const useStyles = withStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default class AddIPO extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pricePerShare: "",
      totalShares: "",
      remarks: "",
      openDateTime: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePricePerShareChange = this.handlePricePerShareChange.bind(this);
    this.handleRemarksChange = this.handleRemarksChange.bind(this);
    this.handleTotalSharesChange = this.handleTotalSharesChange.bind(this);
  }

  handleTotalSharesChange(e) {
    console.log(e.target.value);
    this.setState({
      totalShares: e.target.value,
    });
  }
  handlePricePerShareChange(e) {
    console.log(e.target.value);
    this.setState({
      pricePerShare: e.target.value,
    });
  }
  handleRemarksChange(e) {
    console.log(e.target.value);
    this.setState({
      remarks: e.target.value,
    });
  }
  handleDateChange(e) {
    console.log(e.target.value);
    this.setState({
      openDateTime: e.target.value,
    });
  }

  addThisIPO() {
    console.log(this.props.match.params.companyId);
    var data = {
      totalShares: this.state.totalShares,
      pricePerShare: this.state.pricePerShare,
      remarks: this.state.remarks,
      openDateTime: this.state.openDateTime,
    };
    DataService.addAnIPO(data, this.props.match.params.companyId)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error adding IPO details" });
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
                  label="Total Shares"
                  value={this.state.totalShares ? this.state.totalShares : ""}
                  onChange={this.handleTotalSharesChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Price per share"
                  value={
                    this.state.pricePerShare ? this.state.pricePerShare : ""
                  }
                  onChange={this.handlePricePerShareChange}
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
              <TextField
                id="datetime-local"
                label="Open date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                onChange={this.handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <div className="addCompanyButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.addThisIPO()}
                >
                  Add IPO
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
