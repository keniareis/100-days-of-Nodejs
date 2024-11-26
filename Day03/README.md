# Servidor de Seleções da Copa com Node.js
 ### Objetivo
Aprendi a criar um servidor básico com Node.js e implementar uma rota `POST` para interagir com um mock de dados diretamente no código, sem usar arquivos externos.

## Passos
1. **Configuração Inicial**

    - Criei um arquivo app.js e adicionei o código para configurar o servidor.
    - Utilizei o framework **Express** para gerenciar as rotas.

2. **Mock de Dados no Código**

    - Adicionei o mock de seleções diretamente no app.js:
``` const selecoes = [
  { id: 1, nome: "Brasil" },
  { id: 2, nome: "Argentina" },
  { id: 3, nome: "França" }
];
```  

3. **Criando a Rota `POST`**

    - Configurei uma rota que retorna os dados do mock quando é chamada via POST.
4. **Executando o Servidor**

    - No terminal, executei o comando:
```
node app.js
```
 
- Usei o **Insomnia** para testar a rota `POST`.
### Resultado
Ao testar a rota, recebi como resposta o mock de dados:

```
[
  { "id": 1, "nome": "Brasil" },
  { "id": 2, "nome": "Argentina" },
  { "id": 3, "nome": "França" }
]  
```
🎉 *Agora consigo criar um servidor básico com rotas e dados internos usando Node.js!*






