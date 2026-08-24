const {
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const CartPage = require('../../pages/cart.page');

const cartPage = new CartPage();

When('adiciono o produto {string} ao carrinho', (productName) => {
  cartPage.addProductToCart(productName);
});

Then(
  'devo visualizar uma confirmação de que o produto foi adicionado ao carrinho',
  () => {
    cartPage.validateProductAdded();
  }
);