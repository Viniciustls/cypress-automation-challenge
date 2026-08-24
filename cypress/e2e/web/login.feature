Feature: Login

  Como um usuário cadastrado
  Quero realizar login na aplicação
  Para acessar minha conta

  Scenario: Realizar login com credenciais válidas
    Given que estou na página de login
    When realizo login com credenciais válidas
    Then devo visualizar que o login foi realizado com sucesso