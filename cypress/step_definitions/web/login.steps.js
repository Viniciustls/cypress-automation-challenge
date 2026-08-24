const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/login.page');

const loginPage = new LoginPage();

Given('que estou na página de login', () => {
  loginPage.visit();
});

When('realizo login com credenciais válidas', () => {
  loginPage.fillEmail(Cypress.env('USER_EMAIL'));
  loginPage.fillPassword(Cypress.env('USER_PASSWORD'));
  loginPage.submit();
});

Then('devo visualizar que o login foi realizado com sucesso', () => {
  loginPage.validateLoggedInUser();
});