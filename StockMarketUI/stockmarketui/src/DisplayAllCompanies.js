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
import IndividualCompany from "./IndividualCompany";

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

export default class DisplayAllCompanies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companiesList: [],
      errorMsg: "",
      companyDetails: [],
      //   companyID: ""
    };
  }
  componentDidMount() {
    this.getAllCompanies();
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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AdminDashboard />
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Company Name</StyledTableCell>
                <StyledTableCell>CEO</StyledTableCell>
                <StyledTableCell>Brief&nbsp;</StyledTableCell>
                <StyledTableCell>Sector Name&nbsp;</StyledTableCell>
                <StyledTableCell>Get full details&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.companiesList.map((row) => (
                <StyledTableRow key={row.companyId}>
                  <StyledTableCell component="th" scope="row">
                    {row.companyName}
                  </StyledTableCell>
                  <StyledTableCell>{row.ceo}</StyledTableCell>
                  <StyledTableCell>{row.companyBrief}</StyledTableCell>
                  <StyledTableCell>{row.sectorName}</StyledTableCell>
                  <StyledTableCell>
                    <label>
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        href={`http://localhost:3000/individualCompany${row.companyId}`}
                      >
                        Full details
                      </Button>
                    </label>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
