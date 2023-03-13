const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');


module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1500,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      on('task', { removeDirectory })
    },
    env: {
      hideXhr: true,
      amazon: "https://www.amazon.de",
      google: "https://www.google.com",
      saucedemo: "https://www.saucedemo.com"
    },
  },
});
