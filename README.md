# 🧪 Cypress Automation Challenge

<p align="center">
  <strong>Automação de testes Web e API utilizando Cypress + Cucumber</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-15.21.0-69D3A7?logo=cypress&logoColor=white" alt="Cypress">
  <img src="https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Cucumber-Gherkin-23D96C?logo=cucumber&logoColor=white" alt="Cucumber">
  <img src="https://img.shields.io/badge/Allure-Report-FF6B6B?logo=allure&logoColor=white" alt="Allure">
  <img src="https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=github-actions&logoColor=white" alt="GitHub Actions">
</p>

---

## 📋 Sobre o projeto

Este projeto foi desenvolvido para demonstrar uma estrutura de **automação de testes Web e API** utilizando Cypress.

A automação utiliza **Cucumber/Gherkin** para descrição dos cenários, **Page Object Model** para organização dos fluxos Web, variáveis de ambiente para configuração, **Allure** para geração dos relatórios e **GitHub Actions** para execução dos testes em CI/CD.

O projeto contém atualmente **4 arquivos de cenários (`.feature`)**:

* 🌐 3 cenários relacionados à aplicação Web;
* 🔌 1 cenário relacionado à API do Trello.

---

## 🎯 Objetivos

O projeto busca demonstrar:

* Automação de testes Web;
* Automação de testes de API;
* Utilização de BDD com Gherkin;
* Separação entre cenários e implementação dos steps;
* Utilização do Page Object Model nos testes Web;
* Uso de variáveis de ambiente;
* Proteção de credenciais;
* Execução automatizada através de CI/CD;
* Geração de relatórios com Allure;
* Organização e manutenção de uma suíte de testes automatizados.

---

# 🛠️ Tecnologias

| Tecnologia                        | Utilização                            |
| :-------------------------------- | :------------------------------------ |
| **Cypress**                       | Framework principal de automação      |
| **Node.js**                       | Ambiente de execução                  |
| **npm**                           | Gerenciamento de dependências         |
| **Cucumber / Gherkin**            | Definição dos cenários BDD            |
| **Cypress Cucumber Preprocessor** | Integração entre Cypress e Cucumber   |
| **esbuild**                       | Processamento dos arquivos `.feature` |
| **Page Object Model**             | Organização dos testes Web            |
| **Trello API**                    | API utilizada nos testes              |
| **Allure**                        | Geração dos relatórios                |
| **GitHub Actions**                | CI/CD                                 |

---

# 📁 Estrutura do projeto

```text
cypress-automation-challenge/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── allure-report/
│
├── allure-results/
│
├── cypress/
│   │
│   ├── e2e/
│   │   ├── api/
│   │   │   └── trello-actions.feature
│   │   │
│   │   └── web/
│   │       ├── cart.feature
│   │       ├── login.feature
│   │       └── product-search.feature
│   │
│   ├── pages/
│   │   ├── cart.page.js
│   │   ├── login.page.js
│   │   └── product-search.page.js
│   │
│   ├── step_definitions/
│   │   ├── api/
│   │   │   └── trello-actions.steps.js
│   │   │
│   │   └── web/
│   │       ├── cart.steps.js
│   │       ├── common.steps.js
│   │       ├── login.steps.js
│   │       └── product-search.steps.js
│   │
│   └── support/
│       └── e2e.js
│
├── .cypress-cucumber-preprocessorrc
├── .env
├── .env.example
├── .gitignore
├── cypress.config.js
├── package.json
└── package-lock.json
```

> `node_modules/` também é criado localmente após a instalação das dependências, mas não faz parte do código versionado do projeto.

---

# 📦 Pré-requisitos

Antes de iniciar, certifique-se de possuir:

* **Node.js 22**
* **npm**
* **Git**

Confira as versões:

```bash
node --version
npm --version
git --version
```

A versão do Node.js utilizada no ambiente de CI/CD é a **22**.

---

# 🚀 Instalação

## 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd cypress-automation-challenge
```

---

## 2. Instale as dependências

```bash
npm ci
```

O projeto possui um `package-lock.json`, portanto o `npm ci` instala as dependências de acordo com as versões registradas no lockfile.

---

# ⚙️ Configuração

## Variáveis de ambiente

O projeto utiliza variáveis de ambiente para configurações que não devem ficar diretamente no código.

Existe um arquivo de referência:

```text
.env.example
```

Crie o arquivo `.env`:

```bash
cp .env.example .env
```

Depois, preencha os valores necessários.

### Variáveis utilizadas

```env
CYPRESS_BASE_URL=
CYPRESS_USER_EMAIL=
CYPRESS_USER_PASSWORD=
TRELLO_API_URL=
```

### 🔐 `CYPRESS_BASE_URL`

URL base da aplicação Web utilizada pelos testes.

### 👤 `CYPRESS_USER_EMAIL`

E-mail utilizado no cenário de login com credenciais válidas.

### 🔑 `CYPRESS_USER_PASSWORD`

Senha utilizada no cenário de login com credenciais válidas.

### 🔌 `TRELLO_API_URL`

URL base utilizada nos testes da API do Trello.

> ⚠️ **Importante:** o arquivo `.env` não deve ser versionado e as credenciais não devem ser adicionadas diretamente ao código.

---

# 🧪 Cenários automatizados

## 🔌 API — Trello

Arquivo:

```text
cypress/e2e/api/trello-actions.feature
```

O projeto possui dois cenários para consulta de ações da API do Trello.

### Cenários

| Cenário                      | Objetivo                                          |
| :--------------------------- | :------------------------------------------------ |
| ✅ Consultar ação existente   | Validar a consulta de uma ação existente          |
| ✅ Consultar ação inexistente | Validar o comportamento para uma ação inexistente |

Implementação:

```text
cypress/step_definitions/api/trello-actions.steps.js
```

As requisições são realizadas diretamente através dos recursos de requisição do Cypress.

---

# 🌐 Testes Web

## 🔐 Login

Arquivo:

```text
cypress/e2e/web/login.feature
```

O fluxo de login possui os seguintes cenários:

| Cenário                 | Objetivo                                         |
| :---------------------- | :----------------------------------------------- |
| ✅ Credenciais válidas   | Validar login com usuário e senha válidos        |
| ❌ Credenciais inválidas | Validar comportamento com credenciais incorretas |
| ❌ Sem e-mail            | Validar tentativa de login sem informar e-mail   |
| ❌ E-mail inválido       | Validar e-mail em formato inválido               |

### Arquivos relacionados

**Steps:**

```text
cypress/step_definitions/web/login.steps.js
```

**Page Object:**

```text
cypress/pages/login.page.js
```

As credenciais do cenário positivo são obtidas através das variáveis de ambiente.

---

## 🛒 Carrinho

Arquivo:

```text
cypress/e2e/web/cart.feature
```

O cenário valida:

> Adicionar produto ao carrinho.

### Arquivos relacionados

**Steps:**

```text
cypress/step_definitions/web/cart.steps.js
```

**Page Object:**

```text
cypress/pages/cart.page.js
```

---

## 🔎 Busca de produtos

Arquivo:

```text
cypress/e2e/web/product-search.feature
```

O cenário valida:

> Buscar produto pelo nome.

### Arquivos relacionados

**Steps:**

```text
cypress/step_definitions/web/product-search.steps.js
```

**Page Object:**

```text
cypress/pages/product-search.page.js
```

---

# 🧩 Arquitetura dos testes

A organização dos testes segue uma separação simples entre **cenários**, **steps** e **Page Objects**.

```text
                    ┌─────────────────────┐
                    │   Feature / Gherkin │
                    │      Cenário         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Step Definition   │
                    │   Implementação     │
                    └──────────┬──────────┘
                               │
                         ┌─────┴─────┐
                         │           │
                         ▼           ▼
                  ┌───────────┐  ┌────────────┐
                  │ Page      │  │ Cypress    │
                  │ Object    │  │ Request    │
                  │ Web       │  │ API        │
                  └───────────┘  └────────────┘
```

Nos testes Web, os Page Objects concentram os elementos e ações das páginas.

Nos testes de API, as requisições são realizadas diretamente na implementação dos steps.

---

# ▶️ Execução local

## Executar todos os testes

```bash
npx cypress run
```

O Cypress irá localizar os arquivos conforme o padrão:

```text
cypress/e2e/**/*.feature
```

---

## Abrir o Cypress

Para executar através da interface gráfica:

```bash
npx cypress open
```

---

# 🎯 Executar um teste específico

## API — Trello

```bash
npx cypress run --spec "cypress/e2e/api/trello-actions.feature"
```

## Login

```bash
npx cypress run --spec "cypress/e2e/web/login.feature"
```

## Carrinho

```bash
npx cypress run --spec "cypress/e2e/web/cart.feature"
```

## Busca de produtos

```bash
npx cypress run --spec "cypress/e2e/web/product-search.feature"
```

---

# 📊 Allure Report

O projeto utiliza **Allure Report** para gerar uma visualização dos resultados da execução dos testes.

Durante a execução são gerados os resultados em:

```text
allure-results/
```

## Gerar o relatório

Após executar os testes:

```bash
npx allure generate ./allure-results -o ./allure-report --clean
```

O relatório será criado em:

```text
allure-report/
```

## Abrir o relatório

```bash
npx allure open ./allure-report
```

---

# 🔄 CI/CD — GitHub Actions

O projeto possui uma pipeline configurada em:

```text
.github/workflows/cypress.yml
```

A pipeline é executada automaticamente em:

```text
push → master
```

e:

```text
pull request → master
```

## Pipeline

```text
┌──────────────┐
│    Checkout  │
└──────┬───────┘
       ▼
┌──────────────┐
│ Setup Node 22│
└──────┬───────┘
       ▼
┌──────────────┐
│   npm ci     │
└──────┬───────┘
       ▼
┌──────────────┐
│ Cypress Tests│
└──────┬───────┘
       ▼
┌──────────────┐
│ Allure Report│
└──────────────┘
```

---

# 🔐 Configuração do GitHub Actions

As variáveis necessárias para a execução da pipeline devem ser configuradas no GitHub.

Acesse:

```text
Repository
   ↓
Settings
   ↓
Secrets and variables
   ↓
Actions
```

## Variables

Configure:

```text
TRELLO_API_URL
CYPRESS_BASE_URL
```

## Secrets

Configure:

```text
CYPRESS_USER_EMAIL
CYPRESS_USER_PASSWORD
```

As credenciais de login são armazenadas como **GitHub Secrets**.

O workflow utiliza:

```yaml
env:
  TRELLO_API_URL: ${{ vars.TRELLO_API_URL }}
  CYPRESS_BASE_URL: ${{ vars.CYPRESS_BASE_URL }}
  CYPRESS_USER_EMAIL: ${{ secrets.CYPRESS_USER_EMAIL }}
  CYPRESS_USER_PASSWORD: ${{ secrets.CYPRESS_USER_PASSWORD }}
```

---

# 🗂️ Principais arquivos

| Arquivo                            | Responsabilidade                        |
| :--------------------------------- | :-------------------------------------- |
| `package.json`                     | Dependências e configurações do projeto |
| `package-lock.json`                | Controle das versões das dependências   |
| `cypress.config.js`                | Configuração do Cypress                 |
| `.cypress-cucumber-preprocessorrc` | Configuração do Cucumber Preprocessor   |
| `.env.example`                     | Modelo das variáveis de ambiente        |
| `.env`                             | Configurações locais                    |
| `cypress/support/e2e.js`           | Arquivo de suporte do Cypress           |
| `.github/workflows/cypress.yml`    | Pipeline de CI/CD                       |

---

# 🧱 Page Objects

Os Page Objects estão localizados em:

```text
cypress/pages/
```

Atualmente:

```text
pages/
├── cart.page.js
├── login.page.js
└── product-search.page.js
```

A utilização do Page Object Model permite separar a interação com a interface dos cenários escritos em Gherkin.

---

# 📝 Step Definitions

Os steps estão organizados de acordo com o tipo de teste:

```text
step_definitions/
├── api/
│   └── trello-actions.steps.js
│
└── web/
    ├── cart.steps.js
    ├── common.steps.js
    ├── login.steps.js
    └── product-search.steps.js
```

Essa separação mantém os testes de API e Web organizados de forma independente.

---

# 🔒 Segurança

Informações sensíveis não devem ser armazenadas diretamente nos arquivos do projeto.

### Execução local

Utilize:

```text
.env
```

### GitHub Actions

Utilize:

```text
GitHub Secrets
```

O arquivo `.env` deve permanecer fora do versionamento.

---

# 🛠️ Troubleshooting

## Login retornando `undefined`

Caso apareça:

```text
cy.type() can only accept a string or number.
You passed in: undefined
```

verifique:

```text
CYPRESS_USER_EMAIL
CYPRESS_USER_PASSWORD
```

Na execução local:

```text
.env
```

Na pipeline:

```text
GitHub → Settings → Secrets and variables → Actions
```

---

## Trello retornando 404

Verifique a variável:

```text
TRELLO_API_URL
```

Certifique-se também de que não existem espaços extras no início ou no final do valor configurado.

---

## Problemas com dependências

Execute:

```bash
npm ci
```

Caso necessário:

```bash
rm -rf node_modules
npm ci
```

---

# 🔁 Fluxo completo para um novo ambiente

Para configurar o projeto do zero:

```bash
# 1. Clonar
git clone <URL_DO_REPOSITORIO>

# 2. Entrar no projeto
cd cypress-automation-challenge

# 3. Instalar dependências
npm ci

# 4. Criar configuração local
cp .env.example .env

# 5. Configurar as variáveis no .env

# 6. Executar os testes
npx cypress run

# 7. Gerar relatório
npx allure generate ./allure-results -o ./allure-report --clean

# 8. Abrir relatório
npx allure open ./allure-report
```

---

# ✅ Checklist de configuração

Antes de executar o projeto, confirme:

* [ ] Node.js 22 instalado
* [ ] npm instalado
* [ ] Repositório clonado
* [ ] Dependências instaladas com `npm ci`
* [ ] `.env` criado
* [ ] `CYPRESS_BASE_URL` configurada
* [ ] `CYPRESS_USER_EMAIL` configurada
* [ ] `CYPRESS_USER_PASSWORD` configurada
* [ ] `TRELLO_API_URL` configurada
* [ ] Testes executados localmente
* [ ] Allure Report gerado

Para execução no GitHub Actions:

* [ ] `CYPRESS_BASE_URL` configurada como Variable
* [ ] `TRELLO_API_URL` configurada como Variable
* [ ] `CYPRESS_USER_EMAIL` configurada como Secret
* [ ] `CYPRESS_USER_PASSWORD` configurada como Secret

---

# 📌 Resumo

| Área            | Implementação                       |
| :-------------- | :---------------------------------- |
| Automação Web   | Cypress                             |
| Automação API   | Cypress `cy.request()`              |
| BDD             | Cucumber / Gherkin                  |
| Organização Web | Page Object Model                   |
| Configuração    | `.env` / GitHub Variables           |
| Credenciais     | `.env` local / GitHub Secrets       |
| Relatórios      | Allure                              |
| CI/CD           | GitHub Actions                      |
| Cenários API    | Trello Actions                      |
| Cenários Web    | Login, Carrinho e Busca de produtos |

---

## 👨‍💻 Projeto

**Cypress Automation Challenge**

Projeto desenvolvido com foco em boas práticas de automação, organização dos testes, reutilização, segurança de credenciais, execução em CI/CD e geração de evidências através de relatórios.

---
