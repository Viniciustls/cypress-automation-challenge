class ProductSearchPage {
  searchProduct(productName) {
    cy.get('#search_product')
      .should('be.visible')
      .clear()
      .type(productName);

    cy.get('#submit_search')
      .should('be.visible')
      .click();
  }

  validateProduct(productName) {
    cy.get('.productinfo.text-center p')
      .should('be.visible')
      .and('contain.text', productName);
  } 
}

module.exports = ProductSearchPage;