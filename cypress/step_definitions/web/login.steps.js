const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const LoginPage = require('../../pages/login.page');

const loginPage = new LoginPage();

Given('que estou na página de login', () => {
  loginPage.visit();
});

When('realizo login com credenciais válidas', () => {
  loginPage.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD')
  );
});

Then('devo visualizar que o login foi realizado com sucesso', () => {
  loginPage.validateSuccessfulLogin();
});

When('realizo login com email ou senha inválidos', () => {
  loginPage.loginWithInvalidCredentials();
});

Then('devo visualizar a mensagem de credenciais inválidas', () => {
  loginPage.validateInvalidCredentialsMessage();
});

When('tento realizar login sem informar o email', () => {
  loginPage.submitWithoutEmail();
});

Then('o campo de email deve apresentar uma validação de preenchimento obrigatório', () => {
  loginPage.validateRequiredEmail();
});

When('tento realizar login com um email em formato inválido', () => {
  loginPage.submitWithInvalidEmail();
});

Then('o campo de email deve apresentar uma validação de formato inválido', () => {
  loginPage.validateInvalidEmail();
});