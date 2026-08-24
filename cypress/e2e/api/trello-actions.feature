Feature: Consulta de ação no Trello

  Como um usuário da API
  Quero consultar uma ação no Trello
  Para validar os dados retornados pelo serviço

  Scenario: Consultar ação existente
    When realizo uma requisição GET para uma ação existente
    Then o status da resposta deve ser 200
    And a resposta deve conter os dados esperados da ação

  Scenario: Consultar ação inexistente
    When realizo uma requisição GET para uma ação inexistente
    Then o status da resposta deve ser 404
    And a resposta deve informar que o recurso não foi encontrado