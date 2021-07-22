import axios from "axios";

class DataService {
  signUpUser(data) {
    return axios.post("http://localhost:8080/setuserapi", data);
  }

  retrieveCompanyList() {
    return axios.get("http://localhost:8080/getAllCompanies");
  }

  retrieveCompanyDetails(companyId) {
    return axios.get(`http://localhost:8080/getCompanyById/${companyId}`);
  }
  retrieveStockExchangeListOfCompany(companyId) {
    return axios.get(
      `http://localhost:8080/getAllStockExchangesACompanyListedIn/${companyId}`
    );
  }
}
export default new DataService();
