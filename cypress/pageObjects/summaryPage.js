export class SummaryPage {
  static get facility() {
    return cy.get("#facility");
  }

  static get applyForReadmission() {
    return cy.get("#hospital_readmission");
  }

  static get program() {
    return cy.get("#program");
  }

  static get date() {
    return cy.get("#visit_date");
  }

  static get comment() {
    return cy.get("#comment");
  }
}
