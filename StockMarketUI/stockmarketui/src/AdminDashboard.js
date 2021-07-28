import React, { Component } from "react";
import { Button } from "@material-ui/core";
import AuthenticationService from "./AuthenticationService";

export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // ontoCompanyView() {
  //   this.props.history.push("/CompanyView");
  // }
  doLogout() {
    AuthenticationService.logout();
    // this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <header>
          <nav class="navbar">
            <ul>
              <li>
                <a href="http://localhost:3000/ImportExcel">Import Data</a>
              </li>
              <li>
                <a href="http://localhost:3000/CompanyView">Manage Companies</a>
              </li>
              <li>
                <a href="http://localhost:3000/ExchangeView">
                  Manage Exchanges
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/SectorView">Sector</a>
              </li>
              <li>
                <a href="http://localhost:3000/getAllIPOs">IPO Details</a>
              </li>
              <div class="search">
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={() => this.doLogout()}
                  href="http://localhost:3000/login"
                >
                  Log out
                </Button>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
