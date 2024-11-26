# Servidor de Seleções da Copa - Dia 4 🌍⚽
## Objetivo
No quarto dia aprendendo Node.js, criei um servidor com rotas `GET` e `POST` para gerenciar seleções da Copa do Mundo, utilizando o framework **Express**.

## Passos
1. **Configuração Inicial**

    - Estruturei o projeto com arquivos separados: `app.js` para configurar as rotas e `server.js` para inicializar o servidor.
    - Configurei o Express para interpretar requisições com **JSON** no body.
2. **Mock de Dados**

    - Defini um array diretamente no código para representar as seleções e seus grupos:
```
const selecoes = [
  { id: 1, selecao: "Brasil", grupo: "F" },
  { id: 2, selecao: "Argentina", grupo: "F" },
  { id: 3, selecao: "França", grupo: "F" },
  { id: 4, selecao: "Espanha", grupo: "F" },
];
```

3. **Rotas Criadas**

    - **GET** `/`: Retorna uma mensagem simples para indicar que o servidor está funcionando.
    - **GET** `/selecoes`: Retorna o mock de seleções com status 200.
    - **POST** `/selecoes`: Adiciona uma nova seleção ao mock e retorna um status 201 com uma mensagem de sucesso.

4. **Executando o Servidor**

    - No terminal, executei o comando:
```
npm run dev
```

- Testei as rotas utilizando o Insomnia.
## Resultado
    
- Testando a rota GET /selecoes, recebo:
```
[
  { "id": 1, "selecao": "Brasil", "grupo": "F" },
  { "id": 2, "selecao": "Argentina", "grupo": "F" },
  { "id": 3, "selecao": "França", "grupo": "F" },
  { "id": 4, "selecao": "Espanha", "grupo": "F" }
]
```
- Com a rota POST /selecoes, ao enviar um novo objeto no body 
da requisição, recebo a mensagem:
``` 
Seleção cadastrada!
```
🎉 *Hoje consegui implementar rotas completas para leitura e escrita de dados no servidor com Express!*











