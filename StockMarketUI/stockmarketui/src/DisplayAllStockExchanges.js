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

export default class DisplayAllStockExchanges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockExchangeList: [],
      errorMsg: "",
      stockExchangeDetails: [],
    };
  }
  componentDidMount() {
    this.getAllStockExchanges();
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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AdminDashboard />
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Stock Exchange Name</StyledTableCell>
                <StyledTableCell>Brief&nbsp;</StyledTableCell>
                <StyledTableCell>Contact Address&nbsp;</StyledTableCell>
                <StyledTableCell>Remarks&nbsp;</StyledTableCell>
                <StyledTableCell>Get All Companies&nbsp;</StyledTableCell>
                <StyledTableCell>Edit Stock Ex.&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.stockExchangeList.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.stockExchangeName}
                  </StyledTableCell>
                  <StyledTableCell>{row.brief}</StyledTableCell>
                  <StyledTableCell>{row.contactAddress}</StyledTableCell>
                  <StyledTableCell>{row.remarks}</StyledTableCell>
                  <StyledTableCell>
                    <label>
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        href={`http://localhost:3000/getAllCompaniesInThisExchange${row.id}`}
                      >
                        Companies
                      </Button>
                    </label>
                  </StyledTableCell>
                  <StyledTableCell>
                    <label>
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        href={`http://localhost:3000/updateStockExchange${row.id}`}
                      >
                        Edit
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
