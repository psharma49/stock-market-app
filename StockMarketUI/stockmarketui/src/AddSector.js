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

export default class AddSector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectorName: "",
      brief: "",
    };
    this.handleSectorNameChange = this.handleSectorNameChange.bind(this);
    this.handleBriefChange = this.handleBriefChange.bind(this);
  }

  handleSectorNameChange(e) {
    console.log(e.target.value);
    this.setState({
      sectorName: e.target.value,
    });
  }
  handleBriefChange(e) {
    console.log(e.target.value);
    this.setState({
      brief: e.target.value,
    });
  }

  addThisSector() {
    var data = {
      sectorName: this.state.sectorName,
      brief: this.state.brief,
    };
    DataService.addASector(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error adding stock exchange user" });
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
                  label="Sector Name"
                  value={this.state.sectorName ? this.state.sectorName : ""}
                  onChange={this.handleSectorNameChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Brief"
                  value={this.state.brief ? this.state.brief : ""}
                  onChange={this.handleBriefChange}
                />
              </div>
              <div className="addCompanyButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.addThisSector()}
                >
                  Add Sector
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
