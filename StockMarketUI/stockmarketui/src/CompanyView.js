import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard";
import Button from "@material-ui/core/Button";

export default class CompanyView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getCompanyList() {
    this.props.history.push("/displayAllCompanies");
  }
  addCompany() {
    this.props.history.push("/addCompany");
  }

  render() {
    return (
      <div>
        <AdminDashboard />
        <div class="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search company"
          />
          <Button variant="contained" size="small" color="primary">
            Search
          </Button>
        </div>
        <div className="app">
          <div className="container">
            <div className="BVUpload">
              <div className="screentext">
                <label>Manage Companies</label>
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
                <button className="btnBV">Map company code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
