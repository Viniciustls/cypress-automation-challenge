class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('[data-qa="login-email"]')
      .clear()
      .type(email)
      .should('have.value', email);
  }

  fillPassword(password) {
    cy.get('[data-qa="login-password"]')
      .clear()
      .type(password)
      .should('have.value', password);
  }

  submit() {
    cy.get('[data-qa="login-button"]').click();
  }

  validateLoggedInUser() {
    cy.contains('a', 'Logged in as').should('be.visible');
  }
}

module.exports = LoginPage;