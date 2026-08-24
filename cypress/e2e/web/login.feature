Feature: Login

  Como um usuário cadastrado
  Quero realizar login na aplicação
  Para acessar minha conta

  Scenario: Realizar login com credenciais válidas
    Given que estou na página de login
    When realizo login com credenciais válidas
    Then devo visualizar que o login foi realizado com sucesso

  Scenario: Tentar realizar login com credenciais inválidas
    Given que estou na página de login
    When realizo login com email ou senha inválidos
    Then devo visualizar a mensagem de credenciais inválidas

  Scenario: Tentar realizar login sem informar o email
    Given que estou na página de login
    When tento realizar login sem informar o email
    Then o campo de email deve apresentar uma validação de preenchimento obrigatório

  Scenario: Tentar realizar login com email em formato inválido
    Given que estou na página de login
    When tento realizar login com um email em formato inválido
    Then o campo de email deve apresentar uma validação de formato inválido