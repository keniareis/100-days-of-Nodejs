import express from 'express';
const app = express();

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

export default app;