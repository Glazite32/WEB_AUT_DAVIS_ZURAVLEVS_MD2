import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  static get url() {
        return '';
  }
  
    static get makeAppointmentBtn() {
    return cy.get("#btn-make-appointment");
  }

  static get username() {
    return cy.get("#txt-username");
  }

  static get password() {
    return cy.get("#txt-password");
  }

  static get loginBtn() {
    return cy.get("#btn-login");
  }

  static login(user, pass) {
    this.username.type(user);
    this.password.type(pass);
    this.loginBtn.click();
  }
}
