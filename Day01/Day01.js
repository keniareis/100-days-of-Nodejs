//ve o caminho inteiro do diretorio do arquivo atual
console.log(__dirname);

//mostra o caminho inteiro do arquivo atual
console.log(__filename);

//mostra todas as variaveis de ambiente
console.log(process.env);

//mostra os argumentos passados na linha de comando
console.log(process.argv);

//acessa os argumentos e ignora os 2 primeiros itens
const args = process.argv.slice(2);
console.log('Argumentos: ', args);

//termina um processo node em execução, 0 significa sucesso, senao for 0 é algum erro
if(process.argv.includes('--sair')){
    console.log('Encerrado o processo..');
    process.exit(1); //termina com um codigo de erro
}

//retorna o diretorio atual 
console.log('Diretorio atual: ',process.cwd());

//mostra informações sobre o uso de memoria do processo
console.log('Uso de memoria: ', process.memoryUsage());