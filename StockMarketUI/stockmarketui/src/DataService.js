import axios from "axios";

class DataService {
  checkUser(data) {
    return axios.post("http://localhost:8080/login", data);
  }
  signUpUser(data) {
    return axios.post("http://localhost:8080/setuserapi", data);
  }

  addACompany(data) {
    return axios.post("http://localhost:8080/addNewCompany", data);
  }
  updateACompany(data) {
    return axios.post("http://localhost:8080/updateNewCompany", data);
  }
  updateASector(data) {
    return axios.post("http://localhost:8080/updateSector", data);
  }
  updateAStockExchange(data) {
    return axios.post("http://localhost:8080/updateStockExchange", data);
  }
  updateAnIPO(data) {
    return axios.post("http://localhost:8080/updateAnIPO", data);
  }
  addAStockExchange(data) {
    return axios.post("http://localhost:8080/addStockExchange", data);
  }
  addASector(data) {
    return axios.post("http://localhost:8080/addNewSector", data);
  }
  uploadExcel(data) {
    return axios.post("http://localhost:8080/uploadStockPriceExcel", data);
  }

  addAnIPO(data, companyId) {
    return axios.post(`http://localhost:8080/addIPO/${companyId}`, data);
  }
  retrieveCompanyList() {
    return axios.get("http://localhost:8080/getAllCompanies");
  }
  retriveSectorList() {
    return axios.get("http://localhost:8080/getSectorList");
  }
  retriveIPOsList() {
    return axios.get("http://localhost:8080/getAllIpo");
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

  retrieveSectorListOfCompany(id) {
    return axios.get(`http://localhost:8080/getAllCompaniesInASector/${id}`);
  }

  StockExchangesACompanyListedIn(companyId) {
    return axios.get(
      `http://localhost:8080/getAllStockExchangesACompanyListedIn/${companyId}`
    );
  }

  retriveStockExchangeDetails(id) {
    return axios.get(`http://localhost:8080/getStockExchangeById/${id}`);
  }
  retriveSectorDetails(id) {
    return axios.get(`http://localhost:8080/getSectorById/${id}`);
  }
  retrieveIPODetailsOfCompany(id) {
    return axios.get(`http://localhost:8080/getIpoById/${id}`);
  }

  retrieveCompanyNameByIpoId(id) {
    return axios.get(`http://localhost:8080/getCompanyNameByIpoId/${id}`);
  }
  mapThisCompanyCode(data) {
    return axios.post("http://localhost:8080/mapCompanyCode", data);
  }

  getStockPriceDetailsOfCompaniesBetweenDates(
    companyName,
    startDate,
    endDate,
    stockExchangeName
  ) {
    return axios.get(
      `http://localhost:8080/getCompanyStockPrice/${companyName}/${startDate}/${endDate}/${stockExchangeName}`
    );
  }
}
export default new DataService();
