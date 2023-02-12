const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation:false,
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
});
