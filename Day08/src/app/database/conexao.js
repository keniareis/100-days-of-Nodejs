import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'dbcopa'
});

conexao.connect();


/**
 * executa o codigo sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @return objeto da promise
 */
export const consulta = (sql, valores='', mensageReject) =>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if(error) return reject(mensageReject);
            const rows = JSON.parse(JSON.stringify(result));
            return resolve(rows);
        });
    });
}

export default conexao;