import app from './src/app.js'
import conexao from './infra/conexao.js'

const PORT = 3000;

//fazer a conexao
conexao.connect((erro) =>{
    if(erro){
        console.log(erro);
    }else{
        console.log('Sucesso na conexão!');
        app.listen(PORT, () =>{
            console.log(`ouvindo a porta ${PORT}`);
        });
    }
})