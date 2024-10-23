const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'Aprendizado e2e',
  e2e: {
    baseUrl: 'http://localhost:5500/cypress/src',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
