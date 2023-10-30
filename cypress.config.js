const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'trj1w2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
