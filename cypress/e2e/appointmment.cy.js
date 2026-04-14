import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";
import { SummaryPage } from "../pageObjects/summaryPage";
import { SidebarPage } from "../pageObjects/sidebarPage";

describe("Scenario 1 - Make an Appointment", () => {

    beforeEach(() => {
        LoginPage.visit();
    });
    it("Books an appointment and validates summary", () => {
        LoginPage.makeAppointmentBtn.click();

        LoginPage.login("John Doe", "ThisIsNotAPassword");

        AppointmentPage.facility.select("Seoul CURA Healthcare Center");
        AppointmentPage.applyForReadmission.check();
        AppointmentPage.medicaid.check();
        AppointmentPage.visitDate.click();
        AppointmentPage.date("30").click();
        AppointmentPage.comment.type("CURA Healthcare Service");
        AppointmentPage.bookBtn.click();

        SummaryPage.facility.should("contain", "Seoul CURA Healthcare Center");
        SummaryPage.applyForReadmission.should("contain", "Yes");
        SummaryPage.program.should("contain", "Medicaid");
        SummaryPage.date.should("contain", "30");
        SummaryPage.comment.should("contain", "CURA Healthcare Service");
  });
  
  it("login ,check history and validate, that no appointment - is visible", () => {
      LoginPage.makeAppointmentBtn.click();
      
      LoginPage.login("John Doe", "ThisIsNotAPassword");

      SidebarPage.menuIcon.click();
      SidebarPage.validateSidebar.should("have.class", "active");
      SidebarPage.historyBtn("History").click();
      SidebarPage.noAppointment("No appointment.").should("be.visible");
  });
});