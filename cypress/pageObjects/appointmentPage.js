export class AppointmentPage {
  static get facility() {
    return cy.get("#combo_facility");
  }

  static get applyForReadmission() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get medicaid() {
    return cy.get("#radio_program_medicaid");
  }

  static get visitDate() {
    return cy.get("#txt_visit_date");
  }

  static date(date) {
    return cy.contains("td.day", date);
  }

  static get comment() {
    return cy.get("#txt_comment");
  }

  static get bookBtn() {
    return cy.get("#btn-book-appointment");
  }

}
