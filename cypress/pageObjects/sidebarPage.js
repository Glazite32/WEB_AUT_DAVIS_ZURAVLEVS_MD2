import { BasePage } from "./basePage";

export class SidebarPage {
  static get menuIcon() {
    return cy.get("#menu-toggle");
  }

  static get validateSidebar() {
    return cy.get("#sidebar-wrapper");
  }

  static historyBtn(input) {
    return cy.contains("a", input);
  }

  static noAppointment(input) {
    return cy.contains("p", input)
  }

}
