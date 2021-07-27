import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DataService from "./DataService";
import AdminDashboard from "./AdminDashboard";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = withStyles({
  table: {
    minWidth: 700,
  },
});

export default class IndividualCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockExchangeListOfCompany: [],
      companyDetails: [],
    };

    this.getCompanyDetails = this.getCompanyDetails.bind(this);
    this.retrieveStockExchangesACompanyListedIn =
      this.retrieveStockExchangesACompanyListedIn.bind(this);
  }

  componentDidMount() {
    this.getCompanyDetails(this.props.match.params.companyId);
    this.retrieveStockExchangesACompanyListedIn(
      this.props.match.params.companyId
    );
  }

  retrieveStockExchangesACompanyListedIn(companyId) {
    DataService.StockExchangesACompanyListedIn(companyId)
      .then((response) => {
        console.log(response);
        this.setState({ stockExchangeListOfCompany: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Error retrieving StockExchange List Of Company",
        });
      });
  }

  getCompanyDetails(companyId) {
    DataService.retrieveCompanyDetails(companyId)
      .then((response) => {
        console.log(response);
        this.setState({ companyDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Company details" });
      });
  }

  render() {
    return (
      <div>
        <AdminDashboard />
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Attribute</StyledTableCell>
                <StyledTableCell>Value</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Company Name
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {this.state.companyDetails.companyName}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  CEO
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {this.state.companyDetails.ceo}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Brief
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {this.state.companyDetails.companyBrief}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Sector Name
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {this.state.companyDetails.sectorName}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Turnover
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {this.state.companyDetails.turnover}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Board Of Directors
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {this.state.companyDetails.boardOfDirectors}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Listed In
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {this.state.stockExchangeListOfCompany.join(",")}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            href={`http://localhost:3000/updateCompany${this.props.match.params.companyId}`}
          >
            Edit Details
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            href={`http://localhost:3000/addIPO${this.props.match.params.companyId}`}
          >
            Add IPO
          </Button>
        </div>
      </div>
    );
  }
}
