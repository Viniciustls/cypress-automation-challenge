class ProductSearchPage {
  visit() {
    cy.visit('/products');
  }

  searchProduct(productName) {
    cy.get('#search_product')
      .clear()
      .type(productName);

    cy.get('#submit_search').click();
  }

  validateSearchResults(productName) {
    cy.contains('.productinfo', productName, { matchCase: false })
      .should('be.visible');
  }
}

module.exports = ProductSearchPage;