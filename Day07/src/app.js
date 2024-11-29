import express, { response } from 'express'
import conexao from './app/database/conexao.js';
import SelecaoController from './app/controllers/SelecaoController.js';

const app = express();
app.use(express.json());

// ROTAS
app.post('/selecoes', SelecaoController.store);
app.get('/selecoes', SelecaoController.index);
app.get('/selecoes/:id', SelecaoController.show);
app.delete('/selecoes/:id', SelecaoController.delete);
app.put('/selecoes/:id', SelecaoController.update);

export default app;
