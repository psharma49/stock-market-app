import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard";
import Button from "@material-ui/core/Button";

export default class CompanyView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getStockExchangeList() {
    this.props.history.push("/displayAllStockExchanges");
  }
  addStockExchange() {
    this.props.history.push("/addStockExchange");
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
            placeholder="Search stock exchange"
          />
          <Button variant="contained" size="small" color="primary">
            Search
          </Button>
        </div>
        <div className="app">
          <div className="container">
            <div className="BVUpload">
              <div className="screentext">
                <label>Manage Stock Exchanges</label>
              </div>
              <div className="upload">
                <button
                  className="btnBV"
                  onClick={() => this.getStockExchangeList()}
                >
                  Get Stock Exchange List
                </button>
              </div>
              <div className="dashboardbutton">
                <button
                  className="btnBV"
                  onClick={() => this.addStockExchange()}
                >
                  Add a Stock Exchange
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
