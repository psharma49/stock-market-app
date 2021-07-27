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

export default class UpdateIPO extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDateTime: "",
      pricePerShare: "",
      totalShares: "",
      remarks: "",
      ipoDetails: [],
      companyName: "",
    };

    this.getCompanyName = this.getCompanyName.bind(this);
    this.getIPODetails = this.getIPODetails.bind(this);
    this.handleOpenDateTimeChange = this.handleOpenDateTimeChange.bind(this);
    this.handlePricePerShare = this.handlePricePerShare.bind(this);
    this.handleRemarks = this.handleRemarks.bind(this);
    this.handleTotalShares = this.handleTotalShares.bind(this);
  }

  componentDidMount() {
    this.getIPODetails(this.props.match.params.id);
    this.getCompanyName(this.props.match.params.id);
  }
  getCompanyName(ipoId) {
    DataService.retrieveCompanyNameByIpoId(ipoId)
      .then((response) => {
        console.log(response);
        this.setState({ companyName: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving IPO details" });
      });
  }

  getIPODetails(ipoId) {
    DataService.retrieveIPODetailsOfCompany(ipoId)
      .then((response) => {
        console.log(response);
        this.setState({ ipoDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving IPO details" });
      });
  }

  handleOpenDateTimeChange(e) {
    console.log(e.target.value);
    this.setState({
      openDateTime: e.target.value,
    });
  }
  handlePricePerShare(e) {
    console.log(e.target.value);
    this.setState({
      pricePerShare: e.target.value,
    });
  }
  handleTotalShares(e) {
    console.log(e.target.value);
    this.setState({
      totalShares: e.target.value,
    });
  }
  handleRemarks(e) {
    console.log(e.target.value);
    this.setState({
      remarks: e.target.value,
    });
  }

  updateThisIPO() {
    var data = {
      openDateTime: this.state.openDateTime
        ? this.state.openDateTime
        : this.state.ipoDetails.openDateTime,

      pricePerShare: this.state.pricePerShare
        ? this.state.pricePerShare
        : this.state.ipoDetails.pricePerShare,

      totalShares: this.state.totalShares
        ? this.state.totalShares
        : this.state.ipoDetails.totalShares,

      remarks: this.state.remarks
        ? this.state.remarks
        : this.state.ipoDetails.remarks,

      id: this.props.match.params.id,
    };
    DataService.updateAnIPO(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error updating IPO" });
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
                <label>Update {this.state.companyName}'s IPO </label>
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Total Shares"
                  value={
                    this.state.totalShares
                      ? this.state.totalShares
                      : this.state.ipoDetails.totalShares
                  }
                  onChange={this.handleTotalShares}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Price Per Share"
                  value={
                    this.state.pricePerShare
                      ? this.state.pricePerShare
                      : this.state.ipoDetails.pricePerShare
                  }
                  onChange={this.handlePricePerShare}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Remarks"
                  value={
                    this.state.remarks
                      ? this.state.remarks
                      : this.state.ipoDetails.remarks
                  }
                  onChange={this.handleRemarks}
                />
              </div>
              <TextField
                id="datetime-local"
                label="Open date"
                type="datetime-local"
                value={
                  this.state.openDateTime
                    ? this.state.openDateTime
                    : this.state.ipoDetails.openDateTime
                }
                onChange={this.handleOpenDateTimeChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div className="addCompanyButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.updateThisIPO()}
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
