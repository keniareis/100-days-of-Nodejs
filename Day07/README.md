# 📚 Implementação do Padrão Repository  

Hoje aprendi a refatorar uma API para implementar o **padrão Repository**, uma prática que separa a lógica de acesso aos dados da lógica dos controladores, tornando o código mais organizado e fácil de manter.  

## 🛠️ Alterações Realizadas  

1. **Criação do Arquivo `SelecaoRepository.js`**  
   - Responsável por centralizar as operações com o banco de dados.  

2. **Métodos Implementados no Repository**  
   - `create`, `findAll`, `findById`, `update`, e `delete`, cada um lidando diretamente com SQL.  

3. **Refatoração do Controller**  
   - Os métodos `index`, `show`, `store`, `update` e `delete` agora utilizam o Repository para manipular os dados.  

4. **Uso de Promises e `async/await`**  
   - A API agora trabalha com `async/await`, deixando o código mais claro e simplificado.  

5. **Testes das Rotas no Insomnia**  
   - Todas as rotas foram testadas para garantir que funcionam conforme esperado após a refatoração.  

## 📝 Considerações Sobre Refatoração  
Refatorar o código seguindo o padrão Repository ajuda a:  
- **Reduzir acoplamento** entre o controlador e o banco de dados.  
- Facilitar **testes e manutenção** do código.  
- Tornar a API **mais escalável** para futuras modificações.  

Esse aprendizado foi um grande passo na minha jornada de desenvolvimento backend! 🚀  