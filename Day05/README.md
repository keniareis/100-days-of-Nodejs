# Funcionalidades Implementadas

### 1. **Rotas GET**
- Criada uma nova rota GET com parâmetro `id` para buscar objetos específicos.
- Utilização de funções auxiliares para:
  - Buscar objetos por ID usando o método `filter`.
  - Buscar o índice de objetos por ID utilizando o método `findIndex`.

### 2. **Rotas DELETE**
- Criada uma nova rota DELETE para remover objetos utilizando o ID como parâmetro.
- Exclusão implementada com base no índice do objeto.

### 3. **Rotas PUT**
- Criada uma nova rota PUT para atualização de dados por ID.
- Acessando e manipulando:
  - Parâmetros das requisições.
  - Dados do corpo (`body`) das requisições.
- Utilização de `findIndex` para localizar o índice do objeto a ser atualizado.

### 4. **Organização**
- As rotas e nomes foram organizados e testados utilizando o **Insomnia**.

---

## Tecnologias Utilizadas
- **Node.js** 
- Métodos HTTP: GET, DELETE e PUT.
- Métodos de Array do JavaScript: `filter`, `findIndex`.
- Ferramenta de teste: **Insomnia**.

---

## Dicas de Organização e Documentação
1. **Código**
   - Agrupe funções auxiliares relacionadas em um arquivo separado, como `helpers.js`, para melhor modularização.
   - Use comentários claros e objetivos em funções e trechos importantes do código.
   - Valide entradas (parâmetros e corpo das requisições) para evitar erros de execução.

2. **Documentação**
   - Mantenha este README sempre atualizado para refletir as alterações e funcionalidades do projeto.
   - Inclua exemplos de requisições com os formatos esperados para facilitar testes.

---

💡 Este projeto foi desenvolvido em **27 de novembro de 2024** para aprimorar habilidades práticas no desenvolvimento de APIs com Node.js.