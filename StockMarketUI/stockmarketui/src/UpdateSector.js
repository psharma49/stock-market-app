import React, { Component } from "react";
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

export default class UpdateSector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectorName: "",
      brief: "",
      id: "",
      sectorDetails: [],
    };
    this.handleSectorNameChange = this.handleSectorNameChange.bind(this);
    this.handleBriefChange = this.handleBriefChange.bind(this);
    this.updateThisSector = this.updateThisSector.bind(this);
    this.getSectorDetails = this.getSectorDetails.bind(this);
  }

  componentDidMount() {
    this.getSectorDetails(this.props.match.params.id);
  }

  getSectorDetails(id) {
    DataService.retriveSectorDetails(id)
      .then((response) => {
        console.log(response);
        this.setState({ sectorDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving sector details" });
      });
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

  updateThisSector() {
    var data = {
      sectorName: this.state.sectorName
        ? this.state.sectorName
        : this.state.sectorDetails.sectorName,

      brief: this.state.brief
        ? this.state.brief
        : this.state.sectorDetails.brief,
      id: this.props.match.params.id,
    };
    DataService.updateASector(data)
      .then((response) => {
        if (response.status === 200) this.props.history.push("/AdminDashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error updating sector" });
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
                  value={
                    this.state.sectorName
                      ? this.state.sectorName
                      : this.state.sectorDetails.sectorName
                  }
                  onChange={this.handleSectorNameChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Brief"
                  value={
                    this.state.brief
                      ? this.state.brief
                      : this.state.sectorDetails.brief
                  }
                  onChange={this.handleBriefChange}
                />
              </div>
              <div className="addCompanyButton">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.updateThisSector()}
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
