# 🌐 Objetos globais e `process`

### Exemplos no arquivo .js


## 📋 **Conteúdo**

1. Objetos Globais:
   - `__dirname`: Diretório do arquivo atual. Útil para localizar recursos ou configurar caminhos relativos dentro de um projeto.


   - `__filename`: Caminho completo do arquivo atual, incluindo o nome do arquivo. Ajuda a identificar o arquivo especifico que está sendo executado. 


---
2. Objeto `process`:
   - `process.env`: Acessar variáveis de ambiente, como configuraçoes de ambiente, chaves de API ou outras configurações.


   - `process.argv`: Contém os argumentos passados na linha de comando. Útil para personalizar a execução do script com diferentes entradas.
   
   
   - `process.exit()`: Encerrar o processo. Pode ser usado para sinalizar sucesso (0) ou erro (1).
   
   
   - `process.cwd()`: Diretório de trabalho atual, onde o comando node foi executado.
   
   
   - `process.memoryUsage()`: Informações sobre uso de memória.

---