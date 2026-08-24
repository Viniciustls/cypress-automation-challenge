const {
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const ProductSearchPage = require('../../pages/product-search.page');

const productSearchPage = new ProductSearchPage();

When('busco pelo produto {string}', (productName) => {
  productSearchPage.searchProduct(productName);
});

Then('devo visualizar o produto {string} nos resultados', (productName) => {
  productSearchPage.validateProduct(productName);
});