const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://gallery-app.vivifyideas.com",
    env: {
      testUserEmail: "dunjaivosevic@yahoo.com",
      testUserPassword: "Konstantin2012",
      apiUrl: "https://gallery-api.vivifyideas.com/api"
    }
  },
});
