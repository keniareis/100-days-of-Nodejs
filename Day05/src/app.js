import express from 'express'

const app = express();

app.use(express.json());

//mock
const selecoes = [
    {id: 1, selecao: "Brasil", grupo: 'F'},
    {id: 2, selecao: "Argentina", grupo: 'F'},
    {id: 3, selecao: "França", grupo: 'F'},
    {id: 4, selecao: "Espanha", grupo: 'F'},
]

function buscarSelecaoPorID(id){
    return selecoes.filter(selecao => selecao.id == id);
}

function buscarIndexDoID(id){
    return selecoes.findIndex(selecao => selecao.id == id);
}

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body);
    res.status(201).send('Selecao cadastrada');
});

app.get('/', (req, res) =>{
    res.send('Ola');
});

app.get('/selecoes', (req, res) => {
    res.send(selecoes);
});

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorID(req.params.id));
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexDoID(req.params.id);
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);
});

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexDoID(req.params.id);
    selecoes.splice(index, 1);
    res.send(`selecao com o index ${req.params.id} excluida`);
});


export default app;