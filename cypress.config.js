const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 1400,
  viewportWidth: 1400,
  e2e: {
    setupNodeEvents(on, config) {
      //this.baseUrl = "https://demoqa.com/automation-practice-form";
    },
    baseUrl: "https://katalon-demo-cura.herokuapp.com/",
  },
});