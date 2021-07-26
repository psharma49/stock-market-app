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

export default class UpdateCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockExchangeName: "",
      brief: "",
      contactAddress: "",
      remarks: "",
      id: "",
      stockExchangeDetails: [],
    };
    this.handleStockExchangeNameChange =
      this.handleStockExchangeNameChange.bind(this);
    this.handleBriefChange = this.handleBriefChange.bind(this);
    this.handleContactAddressChange =
      this.handleContactAddressChange.bind(this);
    this.handleRemarksChange = this.handleRemarksChange.bind(this);
    this.updateThisStockExchange = this.updateThisStockExchange.bind(this);
    this.getStockExchangeDetails = this.getStockExchangeDetails.bind(this);
  }

  componentDidMount() {
    this.getStockExchangeDetails(this.props.match.params.id);
  }

  getStockExchangeDetails(id) {
    DataService.retriveStockExchangeDetails(id)
      .then((response) => {
        console.log(response);
        this.setState({ stockExchangeDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Stock Exchange details" });
      });
  }

  handleStockExchangeNameChange(e) {
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

  updateThisStockExchange() {
    var data = {
      stockExchangeName: this.state.stockExchangeName
        ? this.state.stockExchangeName
        : this.state.stockExchangeDetails.stockExchangeName,

      brief: this.state.brief
        ? this.state.brief
        : this.state.stockExchangeDetails.brief,

      contactAddress: this.state.contactAddress
        ? this.state.contactAddress
        : this.state.stockExchangeDetails.contactAddress,

      remarks: this.state.remarks
        ? this.state.remarks
        : this.state.stockExchangeDetails.remarks,

      id: this.props.match.params.id,
    };
    DataService.updateAStockExchange(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error updating company" });
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
                      : this.state.stockExchangeDetails.stockExchangeName
                  }
                  onChange={this.handleStockExchangeNameChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Brief"
                  value={
                    this.state.brief
                      ? this.state.brief
                      : this.state.stockExchangeDetails.brief
                  }
                  onChange={this.handleBriefChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Contact Address"
                  value={
                    this.state.contactAddress
                      ? this.state.contactAddress
                      : this.state.stockExchangeDetails.contactAddress
                  }
                  onChange={this.handleContactAddressChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Remarks"
                  value={
                    this.state.remarks
                      ? this.state.remarks
                      : this.state.stockExchangeDetails.remarks
                  }
                  onChange={this.handleRemarksChange}
                />
              </div>
              <div className="addCompanyButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.updateThisStockExchange()}
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
