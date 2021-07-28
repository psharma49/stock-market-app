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
import UpdateIPO from "./UpdateIPO";
import CompareCompany from "./CompareCompany";
import AuthenticatedRoute from "./AuthenticatedRoute";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route exact path="/Signup" component={SignUp} />
          <AuthenticatedRoute
            exact
            path="/AdminDashboard"
            component={AdminDashboard}
          />
          <AuthenticatedRoute path="/CompanyView" component={CompanyView} />
          <AuthenticatedRoute
            exact
            path="/displayAllCompanies"
            component={DisplayAllCompanies}
          />
          <AuthenticatedRoute
            exact
            path="/getAllIPOs"
            component={DisplayAllIPOs}
          />
          <AuthenticatedRoute
            exact
            path="/individualCompany:companyId"
            component={IndividualCompany}
          />
          <AuthenticatedRoute
            exact
            path="/getAllCompaniesInThisExchange:id"
            component={CompaniesInStockExchange}
          />
          <AuthenticatedRoute
            exact
            path="/getAllCompaniesInThisSector:id"
            component={CompaniesInSector}
          />
          <AuthenticatedRoute path="/addCompany" component={AddCompany} />
          <AuthenticatedRoute
            path="/addStockExchange"
            component={AddStockExchange}
          />
          <AuthenticatedRoute
            path="/mapCompanyAndStockExchange"
            component={MapCompanyCode}
          />
          <AuthenticatedRoute path="/ExchangeView" component={ExchangeView} />
          <AuthenticatedRoute
            path="/displayAllStockExchanges"
            component={DisplayAllStockExchanges}
          />
          <AuthenticatedRoute path="/SectorView" component={SectorView} />
          <AuthenticatedRoute
            path="/displayAllSectors"
            component={DisplayAllSectors}
          />

          <AuthenticatedRoute path="/addNewSector" component={AddSector} />
          <AuthenticatedRoute path="/ImportExcel" component={SheetJSApp} />
          <AuthenticatedRoute
            path="/updateCompany:companyId"
            component={UpdateCompany}
          />
          <AuthenticatedRoute
            path="/updateStockExchange:id"
            component={UpdateExchange}
          />
          <AuthenticatedRoute path="/addIPO:companyId" component={AddIPO} />
          <AuthenticatedRoute
            path="/updateSector:id"
            component={UpdateSector}
          />
          <AuthenticatedRoute path="/UserDashboard" component={UserDashboard} />
          <AuthenticatedRoute path="/updateIPO:id" component={UpdateIPO} />
          <AuthenticatedRoute
            path="/CompareCompany"
            component={CompareCompany}
          />
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
