const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'Aprendizado e2e',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
