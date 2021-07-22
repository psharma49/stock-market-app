import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import AdminDashboard from "./AdminDashboard";
import CompanyView from "./CompanyView";
import DisplayAllCompanies from "./DisplayAllCompanies";
import IndividualCompany from "./IndividualCompany";

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
          <Route
            exact
            path="/individualCompany:companyId"
            component={IndividualCompany}
          />
          {/* <AuthenticatedRoute exact path="/imagess" component={imagess}/>
                 <AuthenticatedRoute exact path="/HeaderComponent" component={HeaderComponent}/>
                 <AuthenticatedRoute exact path="/BVUpload" component={BVUpload}/>
                 <AuthenticatedRoute exact path="/BulkUpload" component={BulkUpload}/>
                 <AuthenticatedRoute exact path="/UploadSuccessful" component={UploadSuccessful}/> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
