class CartPage {
  addProductToCart(productName) {
    cy.contains('.productinfo.text-center p', productName)
      .filter(':visible')
      .first()
      .closest('.single-products')
      .find('.productinfo .add-to-cart')
      .should('be.visible')
      .click();
  }

  validateProductAdded() {
    cy.contains('.modal-content', 'Your product has been added to cart.')
      .should('be.visible');
  }

  viewCart() {
    cy.contains('a', 'View Cart')
      .should('be.visible')
      .click();
  }

  validateProductInCart(productName) {
    cy.contains('td.cart_description a', productName)
      .should('be.visible');
  }
}

module.exports = CartPage;