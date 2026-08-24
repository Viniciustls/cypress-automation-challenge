const {
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');

let response;

When('realizo uma requisição GET para uma ação existente', () => {
  cy.request(
    'GET',
    Cypress.env('TRELLO_API_URL')
  ).then((res) => {
    response = res;
  });
});

When('realizo uma requisição GET para uma ação inexistente', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('TRELLO_API_URL')}/000000000000000000000000`,
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
});

Then('o status da resposta deve ser {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then('a resposta deve conter os dados esperados da ação', () => {
  const { body, headers } = response;

  expect(headers['content-type'])
    .to.include('application/json');

  expect(body)
    .to.be.an('object');

  expect(body.id)
    .to.be.a('string')
    .and.not.be.empty;

  expect(body.idMemberCreator)
    .to.be.a('string')
    .and.not.be.empty;

  expect(body.data)
    .to.be.an('object');

  expect(body.data.list)
    .to.be.an('object');

  expect(body.data.list.id)
    .to.be.a('string')
    .and.not.be.empty;

  expect(body.data.list.name)
    .to.be.a('string')
    .and.not.be.empty;

  expect(body.type)
    .to.be.a('string')
    .and.not.be.empty;

  expect(body.date)
    .to.be.a('string')
    .and.match(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
    );

  cy.log(`Nome da lista: ${body.data.list.name}`);
});

Then('a resposta deve informar que o recurso não foi encontrado', () => {
  expect(response.body).to.exist;
});