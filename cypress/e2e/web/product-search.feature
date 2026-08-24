Feature: Busca de produtos

  Como um usuário
  Quero buscar produtos
  Para encontrar um produto específico

  Scenario: Buscar produto pelo nome
    Given que estou na página de produtos
    When busco pelo produto "T-shirt"
    Then devo visualizar produtos relacionados a "T-shirt"