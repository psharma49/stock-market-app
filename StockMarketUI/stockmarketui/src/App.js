import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import AdminDashboard from "./AdminDashboard";
import CompanyView from "./CompanyView";
import DisplayAllCompanies from "./DisplayAllCompanies";
import IndividualCompany from "./IndividualCompany";
import AddCompany from "./AddCompany";
import MapCompanyCode from "./MapCompanyCode";
import ExchangeView from "./ExchangeView";
import DisplayAllStockExchanges from "./DisplayAllStockExchanges";
import CompaniesInStockExchange from "./CompaniesInStockExchange";
import AddStockExchange from "./AddStockExchange";
import SectorView from "./SectorView";
import CompaniesInSector from "./CompaniesInSector";
import DisplayAllSectors from "./DisplayAllSectors";
import AddSector from "./AddSector";
import SheetJSApp from "./SheetJSApp";
import UpdateCompany from "./UpdateCompany";
import UpdateExchange from "./UpdateExchange";
import UpdateSector from "./UpdateSector";
import AddIPO from "./AddIPO";
import UserDashboard from "./UserDashboard";
import fusion from "./fusion";
import CompanyCharts from "./CompanyCharts";
import DisplayAllIPOs from "./DisplayAllIPOs";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/CompanyView" component={CompanyView} />
          <Route
            exact
            path="/displayAllCompanies"
            component={DisplayAllCompanies}
          />
          <Route exact path="/getAllIPOs" component={DisplayAllIPOs} />
          <Route
            exact
            path="/individualCompany:companyId"
            component={IndividualCompany}
          />
          <Route
            exact
            path="/getAllCompaniesInThisExchange:id"
            component={CompaniesInStockExchange}
          />
          <Route
            exact
            path="/getAllCompaniesInThisSector:id"
            component={CompaniesInSector}
          />
          <Route path="/addCompany" component={AddCompany} />
          <Route path="/addStockExchange" component={AddStockExchange} />
          <Route
            path="/mapCompanyAndStockExchange"
            component={MapCompanyCode}
          />
          <Route path="/ExchangeView" component={ExchangeView} />
          <Route
            path="/displayAllStockExchanges"
            component={DisplayAllStockExchanges}
          />
          <Route path="/SectorView" component={SectorView} />
          <Route path="/displayAllSectors" component={DisplayAllSectors} />

          <Route path="/addNewSector" component={AddSector} />
          <Route path="/ImportExcel" component={SheetJSApp} />
          <Route path="/updateCompany:companyId" component={UpdateCompany} />
          <Route path="/updateStockExchange:id" component={UpdateExchange} />
          <Route path="/addIPO:companyId" component={AddIPO} />
          <Route path="/updateSector:id" component={UpdateSector} />
          <Route path="/UserDashboard" component={UserDashboard} />
          <Route path="/companyCharts" component={CompanyCharts} />
          {/* <AuthenticatedRoute
            exact
            path="/HeaderComponent"
            component={HeaderComponent}
          />
          <AuthenticatedRoute exact path="/BVUpload" component={BVUpload} />
          <AuthenticatedRoute exact path="/BulkUpload" component={BulkUpload} />
          <AuthenticatedRoute
            exact
            path="/UploadSuccessful"
            component={UploadSuccessful}
          /> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
