import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DataService from "./DataService";

export default class CompanyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companiesList: [],
      enteredCompany: "",
    };
    this.getCompanyList = this.getCompanyList.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.mapCompanyCode = this.mapCompanyCode.bind(this);
    this.getAllCompanies = this.getAllCompanies.bind(this);
    // this.handleCompanyTextChange = this.handleCompanyTextChange.bind(this);
  }
  componentDidMount() {
    this.getAllCompanies();
  }

  getAllCompanies() {
    DataService.retrieveCompanyList()
      .then((response) => {
        console.log(response);
        this.setState({ companiesList: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving company list" });
      });
  }

  getCompanyList() {
    this.props.history.push("/displayAllCompanies");
  }
  addCompany() {
    this.props.history.push("/addCompany");
  }
  mapCompanyCode() {
    this.props.history.push("/mapCompanyAndStockExchange");
  }

  // handleCompanyTextChange(e) {
  //   console.log(e.target.value);
  //   this.setState({
  //     enteredCompany: e.target.value,
  //   });
  // }

  getCompanyDetails() {
    this.props.history.push(`/individualCompany${this.state.enteredCompany}`);
  }

  render() {
    return (
      <div>
        <AdminDashboard />
        <div className="auto-complete">
          <Autocomplete
            id="combo-box-demo"
            options={this.state.companiesList}
            value={(option) => option.companyId}
            getOptionLabel={(option) => option.companyName}
            align="right"
            style={{ width: 200 }}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Company"
                variant="outlined"
              />
            )}
          />
          {/* <div>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => this.getCompanyDetails()}
            >
              Get
            </Button>
          </div> */}
        </div>
        <div className="app">
          <div className="container">
            <div className="BVUpload">
              <div className="screentext">
                <label className="manageCompany">Manage Companies</label>
              </div>
              <div className="upload">
                <button className="btnBV" onClick={() => this.getCompanyList()}>
                  Get Company List
                </button>
              </div>
              <div className="dashboardbutton">
                <button className="btnBV" onClick={() => this.addCompany()}>
                  Add a company
                </button>
              </div>
              <div className="dashboardbutton">
                <button className="btnBV" onClick={() => this.mapCompanyCode()}>
                  Map company code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
