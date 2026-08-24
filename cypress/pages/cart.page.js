class CartPage {
  addProductToCart(productName) {
    cy.contains('.productinfo', productName, { matchCase: false })
      .should('be.visible')
      .within(() => {
        cy.get('.add-to-cart').click();
      });
  }

  validateProductAdded() {
    cy.get('.modal-title')
      .should('be.visible')
      .and('contain', 'Added!');

    cy.contains('.modal-body', 'Your product has been added to cart.')
      .should('be.visible');
  }

  viewCart() {
    cy.get('a[href="/view_cart"]').click();
  }
}

module.exports = CartPage;