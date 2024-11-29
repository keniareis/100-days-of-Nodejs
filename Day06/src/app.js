import express from 'express'
import conexao from '../infra/conexao.js';
const app =  express();

app.use(express.json());

function buscarSelecaoPorID(id){
    return selecoes.filter(selecao => selecao.id == id);
}

function buscarIndexDoID(id){
    return selecoes.findIndex(selecao => selecao.id == id);
}

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body);
    res.status(201).send('Seleção Cadastrada!');
});

app.get('/selecoes', (req, res) => {
    //res.send(selecoes);
    const sql = "SELECT * FROM selecoes";
    conexao.query(sql, (error, result) =>{
        if(error){
            console.log(error);
            res.status(404).json({'erro': error});
        }else{
            res.status(200).json(result);
        }
    });
});

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorID(req.params.id));
});

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexDoID(req.params.id);
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);
});

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexDoID(req.params.id);
    selecoes.splice(index, 1);
    res.send(`Seleção com o index ${index} excluida`);
});

export default app;