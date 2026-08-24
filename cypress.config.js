require('dotenv').config();

const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig({
  env: {
    USER_EMAIL: process.env.CYPRESS_USER_EMAIL,
    USER_PASSWORD: process.env.CYPRESS_USER_PASSWORD,
    TRELLO_API_URL: process.env.TRELLO_API_URL,
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      allureCypress(on, config, {
        resultsDir: 'allure-results',
      });

      return config;
    },
  },
});