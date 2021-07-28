import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard";
import Button from "@material-ui/core/Button";

export default class SectorView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getSectorList() {
    this.props.history.push("/displayAllSectors");
  }

  addSector() {
    this.props.history.push("/addNewSector");
  }

  render() {
    return (
      <div>
        <AdminDashboard />
        <div className="app">
          <div className="container">
            <div className="BVUpload">
              <div className="screentext">
                <label className="sectorLabel">Manage Sector</label>
              </div>
              <div className="upload">
                <button className="btnBV" onClick={() => this.getSectorList()}>
                  Get Sector List
                </button>
              </div>
              <div className="dashboardbutton">
                <button className="btnBV" onClick={() => this.addSector()}>
                  Add a sector
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
