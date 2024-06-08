import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

const conta = [{
    "conta_id": 1234,
     "saldo": 200
}]

app.get('/conta', (req, res) => {
    res.status(200).json(conta)
})

export default app;