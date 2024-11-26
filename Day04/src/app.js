import express from 'express';
const app = express();

//express ler body com o json
app.use(express.json());

//mock
const selecoes = [
    {id: 1, selecao: "Brasil", grupo: 'F'},
    {id: 2, selecao: "Argentina", grupo: 'F'},
    {id: 3, selecao: "França", grupo: 'F'},
    {id: 4, selecao: "Espanha", grupo: 'F'},
]

app.get('/', (req, res) =>{
    res.send("Day 04");
});

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
});

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada!');
});

export default app;