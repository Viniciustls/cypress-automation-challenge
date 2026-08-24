const {
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const CartPage = require('../../pages/cart.page');

const cartPage = new CartPage();

When('adiciono o produto {string} ao carrinho', (productName) => {
  cartPage.addProductToCart(productName);
});

Then('devo visualizar a confirmação de produto adicionado ao carrinho', () => {
  cartPage.validateProductAdded();
});

When('acesso o carrinho', () => {
  cartPage.viewCart();
});

Then('devo visualizar o produto {string} no carrinho', (productName) => {
  cartPage.validateProductInCart(productName);
});