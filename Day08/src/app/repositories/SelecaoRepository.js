import conexao from "../database/conexao.js";


class SelecaoRepository{

    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;";
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (error, result) => {
                if(error) return reject('Não foi possivel inserir');
                const rows = JSON.parse(JSON.stringify(result));
                console.log(rows);
                return resolve(rows);
            });
        });
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;";
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if(error) return reject('Não foi possivel lcoalizar');
                const rows = JSON.parse(JSON.stringify(result));
                console.log(rows);
                return resolve(rows);
            });
        });
    }
    
    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?;";
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject('Não foi possivel localizar');
                const [rows] = JSON.parse(JSON.stringify(result));
                console.log(rows);
                return resolve(rows);
            });
        });
    }
    
    update(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id=?;";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (error, result) => {
                if(error) return reject('Não foi possivel atualizar');
                const rows = JSON.parse(JSON.stringify(result));
                console.log(rows);
                return resolve(rows);
            });
        });
    }
    
    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;";
    }

}

export default new SelecaoRepository();