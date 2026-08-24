Feature: Busca de produtos

  Como um usuário
  Quero buscar produtos
  Para encontrar um produto específico

  Scenario Outline: Buscar produto pelo nome
    Given que estou na página de produtos
    When busco pelo produto "<produto>"
    Then devo visualizar o produto "<produto>" nos resultados

    Examples:
      | produto                     |
      | Pure Cotton V-Neck T-Shirt |