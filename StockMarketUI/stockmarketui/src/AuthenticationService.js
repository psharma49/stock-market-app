class AuthenticationService {
  registerSuccessfulLogin(username) {
    console.log("Successful Login");
    sessionStorage.setItem("AuthenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }

  isUserLoggedin() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) return false;
    else return true;
  }

  getLoggedinUser() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) return "";
    else return user;
  }
}

export default new AuthenticationService();
