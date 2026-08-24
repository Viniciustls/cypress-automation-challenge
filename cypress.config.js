// require('dotenv').config();

// const { defineConfig } = require('cypress');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
// const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     'file:preprocessor',
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );

//   return config;
// }

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: process.env.CYPRESS_BASE_URL,
//     specPattern: 'cypress/e2e/**/*.feature',
//     supportFile: 'cypress/support/e2e.js',
//     setupNodeEvents,
//   },
// });

require('dotenv').config();

const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  env: {
    USER_EMAIL: process.env.CYPRESS_USER_EMAIL,
    USER_PASSWORD: process.env.CYPRESS_USER_PASSWORD,
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

      return config;
    },
  },
});