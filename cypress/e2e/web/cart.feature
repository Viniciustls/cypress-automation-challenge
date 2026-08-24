Feature: Carrinho de compras

  Como um usuário
  Quero adicionar produtos ao carrinho
  Para realizar uma compra

  Scenario: Adicionar produto ao carrinho
    Given que estou na página de produtos
    When adiciono o produto "T-shirt" ao carrinho
    Then devo visualizar uma confirmação de que o produto foi adicionado ao carrinho