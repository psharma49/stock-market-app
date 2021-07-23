import axios from "axios";

class DataService {
  signUpUser(data) {
    return axios.post("http://localhost:8080/setuserapi", data);
  }

  addACompany(data) {
    return axios.post("http://localhost:8080/addNewCompany", data);
  }

  addAStockExchange(data) {
    return axios.post("http://localhost:8080/addStockExchange", data);
  }

  retrieveCompanyList() {
    return axios.get("http://localhost:8080/getAllCompanies");
  }

  retrieveStockExchangeList() {
    return axios.get("http://localhost:8080/getStockExchangeList");
  }

  retrieveCompanyDetails(companyId) {
    return axios.get(`http://localhost:8080/getCompanyById/${companyId}`);
  }

  retrieveStockExchangeListOfCompany(id) {
    return axios.get(
      `http://localhost:8080/getCompanyListInAStockExchange/${id}`
    );
  }

  StockExchangesACompanyListedIn(companyId) {
    return axios.get(
      `http://localhost:8080/getAllStockExchangesACompanyListedIn/${companyId}`
    );
  }

  mapThisCompanyCode(data) {
    return axios.post("http://localhost:8080/mapCompanyCode", data);
  }
}
export default new DataService();
