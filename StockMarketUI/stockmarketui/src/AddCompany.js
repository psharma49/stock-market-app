import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AdminDashboard from "./AdminDashboard";
import DataService from "./DataService";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import AuthenticationService from "./AuthenticationService";

const useStyles = withStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

export default class AddCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      ceo: "",
      boardOfDirectors: "",
      companyBrief: "",
      sectorName: "",
      turnover: "",
      errorMsg: "",
      sectorsList: [],
    };
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleBoardOfDirectorsChange =
      this.handleBoardOfDirectorsChange.bind(this);
    this.handleCeoChange = this.handleCeoChange.bind(this);
    this.handleCompanyBriefChange = this.handleCompanyBriefChange.bind(this);
    this.handleTurnoverChange = this.handleTurnoverChange.bind(this);
    this.handleSectorNameChange = this.handleSectorNameChange.bind(this);
    this.getAllSectors = this.getAllSectors.bind(this);
  }
  componentDidMount() {
    this.getAllSectors();
  }

  getAllSectors() {
    DataService.retriveSectorList()
      .then((response) => {
        console.log(response);
        this.setState({ sectorsList: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving sector list" });
      });
  }

  handleCompanyChange(e) {
    console.log(e.target.value);
    this.setState({
      companyName: e.target.value,
    });
  }
  handleCeoChange(e) {
    console.log(e.target.value);
    this.setState({
      ceo: e.target.value,
    });
  }
  handleBoardOfDirectorsChange(e) {
    console.log(e.target.value);
    this.setState({
      boardOfDirectors: e.target.value,
    });
  }
  handleCompanyBriefChange(e) {
    console.log(e.target.value);
    this.setState({
      companyBrief: e.target.value,
    });
  }
  handleSectorNameChange(e) {
    console.log(e.target.value);
    this.setState({
      sectorName: e.target.value,
    });
  }
  handleTurnoverChange(e) {
    console.log(e.target.value);
    this.setState({
      turnover: e.target.value,
    });
  }

  addThisCompany() {
    var data = {
      companyName: this.state.companyName,
      ceo: this.state.ceo,
      boardOfDirectors: this.state.boardOfDirectors,
      companyBrief: this.state.companyBrief,
      sectorName: this.state.sectorName,
      turnover: this.state.turnover,
    };
    DataService.addACompany(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error adding company" });
        console.log(this.state.errorMsg);
      });
  }

  render() {
    const isUserLoggedin = AuthenticationService.isUserLoggedin();
    return (
      <div>
        {isUserLoggedin && (
          <div>
            <AdminDashboard />
            <div className="addCompany">
              <div className="form">
                <form noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="standard-basic"
                      label="Company Name"
                      value={
                        this.state.companyName ? this.state.companyName : ""
                      }
                      onChange={this.handleCompanyChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="standard-basic"
                      label="CEO"
                      value={this.state.ceo ? this.state.ceo : ""}
                      onChange={this.handleCeoChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="standard-basic"
                      label="Board of Directors"
                      value={
                        this.state.boardOfDirectors
                          ? this.state.boardOfDirectors
                          : ""
                      }
                      onChange={this.handleBoardOfDirectorsChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="standard-basic"
                      label="Company Brief"
                      value={
                        this.state.companyBrief ? this.state.companyBrief : ""
                      }
                      onChange={this.handleCompanyBriefChange}
                    />
                  </div>
                  <div>
                    <InputLabel id="demo-simple-select-label">
                      Select Sector
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // name="Sector"
                      value={this.state.sectorName}
                      onChange={this.handleSectorNameChange}
                    >
                      {this.state.sectorsList.map((item) => (
                        <MenuItem value={item.sectorName}>
                          {item.sectorName}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <TextField
                      id="standard-basic"
                      label="Turnover"
                      value={this.state.turnover ? this.state.turnover : ""}
                      onChange={this.handleTurnoverChange}
                    />
                  </div>
                  <div className="addCompanyButton">
                    <Button
                      variant="outlined"
                      size="large"
                      color="primary"
                      onClick={() => this.addThisCompany()}
                    >
                      Add Company
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
