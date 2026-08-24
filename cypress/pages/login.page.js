class LoginPage {
  visit() {
    cy.visit('/login');
  }

  login(email, password) {
    cy.get('[data-qa="login-email"]')
      .should('be.visible')
      .clear()
      .type(email);

    cy.get('[data-qa="login-password"]')
      .should('be.visible')
      .clear()
      .type(password, { log: false });

    cy.get('[data-qa="login-button"]')
      .should('be.visible')
      .click();
  }

  loginWithInvalidCredentials() {
    cy.get('[data-qa="login-email"]')
      .should('be.visible')
      .clear()
      .type('invalid@email.com');

    cy.get('[data-qa="login-password"]')
      .should('be.visible')
      .clear()
      .type('invalid-password', { log: false });

    cy.get('[data-qa="login-button"]')
      .should('be.visible')
      .click();
  }

  submitWithoutEmail() {
    cy.get('[data-qa="login-password"]')
      .should('be.visible')
      .clear()
      .type('teste', { log: false });

    cy.get('[data-qa="login-button"]')
      .should('be.visible')
      .click();
  }

  submitWithInvalidEmail() {
    cy.get('[data-qa="login-email"]')
      .should('be.visible')
      .clear()
      .type('teste');

    cy.get('[data-qa="login-password"]')
      .should('be.visible')
      .clear()
      .type('teste', { log: false });

    cy.get('[data-qa="login-button"]')
      .should('be.visible')
      .click();
  }

  validateSuccessfulLogin() {
    cy.contains('a', 'Logged in as')
      .should('be.visible');
  }

  validateInvalidCredentialsMessage() {
    cy.contains('p', 'Your email or password is incorrect!')
      .should('be.visible');
  }

  validateInvalidEmail() {
    cy.get('[data-qa="login-email"]')
      .should('have.prop', 'validity')
      .its('valid')
      .should('be.false');
  }

  validateRequiredEmail() {
    cy.get('[data-qa="login-email"]')
      .should('have.prop', 'validity')
      .its('valid')
      .should('be.false');
  }
}

module.exports = LoginPage;