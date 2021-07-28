import React, { Component } from "react";
import { Button } from "@material-ui/core";
import AuthenticationService from "./AuthenticationService";
export default class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  doLogout() {
    AuthenticationService.logout();
  }

  render() {
    return (
      <div>
        <header>
          <nav class="navbar">
            <ul>
              <li>
                <a href="http://localhost:3000/IPOs">IPOs</a>
              </li>
              <li>
                <a href="http://localhost:3000/C">Compare Company</a>
              </li>
              <li>
                <a href="http://localhost:3000/sectorCharts">Compare Sectors</a>
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
