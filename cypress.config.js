const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: false,
      json: true 
    }
  },
  screenshotOnRunFailure:true,
  screenshotsFolder:'cypress/reports/mochareports/assets',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
