import React, { Component, useState } from "react";
import UserDashboard from "./UserDashboard";
import DataService from "./DataService";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Multiselect } from "multiselect-react-dropdown";
import { Button } from "@material-ui/core";
import CompanyCharts from "./CompanyCharts";
// import scrollIntoView from "scroll-into-view-if-needed";

export default class CompareCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companiesList: [],
      stockExchangeList: [],
      companyNames: [],
      stockExchangeName: "",
      startDate: "",
      endDate: "",
      finalCompaniesSelected: [],
      finalList: [],
      isGraphDisplay: false,
    };

    this.getAllCompanies = this.getAllCompanies.bind(this);
    this.getAllStockExchanges = this.getAllStockExchanges.bind(this);
    this.handleStockExchangeNameChange =
      this.handleStockExchangeNameChange.bind(this);
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getChartsData = this.getChartsData.bind(this);
  }

  componentDidMount() {
    this.getAllCompanies();
    this.getAllStockExchanges();
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

  getAllStockExchanges() {
    DataService.retrieveStockExchangeList()
      .then((response) => {
        console.log(response);
        this.setState({ stockExchangeList: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving stock exchange list" });
      });
  }

  handleStockExchangeNameChange(e) {
    console.log(e.target.value);
    this.setState({
      stockExchangeName: e.target.value,
    });
  }

  handleFromDateChange(e) {
    console.log(e.target.value);
    this.setState({
      startDate: e.target.value,
    });
  }

  handleToDateChange(e) {
    console.log(e.target.value);
    this.setState({
      endDate: e.target.value,
    });
  }
  onSelect(e) {
    console.log(e);
    this.setState({ finalCompaniesSelected: e });
    console.log(this.state.finalCompaniesSelected);
  }
  onRemove(e) {
    console.log(e);
    this.setState({ finalCompaniesSelected: e });
    console.log(this.state.finalCompaniesSelected);
  }
  async getChartsData() {
    console.log(this.state.finalCompaniesSelected.length);
    for (let i = 0; i < this.state.finalCompaniesSelected.length; i++) {
      await DataService.getStockPriceDetailsOfCompaniesBetweenDates(
        this.state.finalCompaniesSelected[i].companyName,
        this.state.startDate,
        this.state.endDate,
        this.state.stockExchangeName
      )
        .then((response) => {
          console.log(response.data);
          let temp2 = response.data;
          for (let i = 0; i < temp2.length; i++) {
            let temp = [
              temp2[i].datee,
              temp2[i].company.companyName,
              temp2[i].sharePrice,
            ];

            this.state.finalList.push(temp);
            console.log(this.state.finalList);
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ errorMsg: "Error retrieving charts data" });
        });
    }
    this.setState({ isGraphDisplay: true });
  }

  render() {
    return (
      <div>
        <UserDashboard />
        <div className="addCompany">
          <div className="form">
            <div>
              <Multiselect
                options={this.state.companiesList}
                displayValue="companyName"
                onSelect={this.onSelect}
                onRemove={this.onRemove}
              />
            </div>

            <div>
              <InputLabel id="demo-simple-select-label">
                Select Stock Exchange
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // name="Sector"
                value={this.state.stockExchangeList.stockExchangeName}
                onChange={this.handleStockExchangeNameChange}
              >
                {this.state.stockExchangeList.map((item) => (
                  <MenuItem value={item.stockExchangeName}>
                    {item.stockExchangeName}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div>
              <TextField
                id="datetl"
                label="From"
                type="date"
                defaultValue=""
                onChange={this.handleFromDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="To"
                type="date"
                defaultValue=""
                onChange={this.handleToDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="addCompanyButton">
              <Button
                variant="outlined"
                size="large"
                color="primary"
                onClick={() => this.getChartsData()}
              >
                Generate Charts
              </Button>
            </div>
          </div>
        </div>
        <div id="companyCharts">
          {this.state.isGraphDisplay && (
            <CompanyCharts finalList={this.state.finalList} />
          )}
        </div>
      </div>
    );
  }
}
