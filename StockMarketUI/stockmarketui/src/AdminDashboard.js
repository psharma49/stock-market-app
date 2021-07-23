import React, { Component } from "react";

export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // ontoCompanyView() {
  //   this.props.history.push("/CompanyView");
  // }

  render() {
    return (
      <div>
        <header>
          <nav class="navbar">
            <ul>
              <li>
                <a>Import Data</a>
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
                <a href="#">Sector</a>
              </li>
              <li>
                <a href="#">IPO Details</a>
              </li>
              <div class="search">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search this website"
                />
              </div>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
