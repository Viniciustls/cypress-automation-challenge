Feature: Carrinho de compras

  Como um usuário
  Quero adicionar produtos ao carrinho
  Para poder comprá-los posteriormente

  Scenario Outline: Adicionar produto ao carrinho
    Given que estou na página de produtos
    When adiciono o produto "<produto>" ao carrinho
    Then devo visualizar a confirmação de produto adicionado ao carrinho
    When acesso o carrinho
    Then devo visualizar o produto "<produto>" no carrinho

    Examples:
      | produto                     |
      | Pure Cotton V-Neck T-Shirt  |