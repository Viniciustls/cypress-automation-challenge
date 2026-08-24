const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('que estou na página de produtos', () => {
  cy.visit('/products');
});