import express from 'express';

const app = express();
app.use(express.json());

const conta = [{
    "conta_id": 1234,
     "saldo": 200
}]

const transacao = []

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.get('/conta', (req, res) => {
    res.status(200).json(conta)
})

app.post('/transacao', (req, res) => {
    const novaTransacao = req.body
    res.status(201).json({
        message: "Transação realizada com sucesso",
        transacao: novaTransacao
    })
})

export default app;