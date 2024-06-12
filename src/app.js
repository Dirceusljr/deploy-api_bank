import express from 'express';
import dbConnection from './config/dbConnect.js';

const conexao = dbConnection

conexao.on('error', (error) => {
    console.error('Erro na conexão com o bando de dados: ', error)
})

conexao.once('open', () => {
    console.log('Conexão com o banco de dados efetuada com sucesso!')
})

const app = express();
app.use(express.json());



const conta = []
const transacao = []

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.get('/conta', (req, res) => {
    res.status(200).json(conta)
})

app.post('/conta', (req, res) => {
    const {conta_id, saldo} = req.body;
    if(!conta_id || !saldo) {
        res.status(400).json({
            message: "Os campos conta e saldo são obrigatórios",
            status: 400
        })
    }
    conta.push(req.body)
    res.status(201).json({
        message: "Conta criada com sucesso",
        conta
    })
})

app.post('/transacao', (req, res) => {
    const novaTransacao = req.body
    res.status(201).json({
        message: "Transação realizada com sucesso",
        transacao: novaTransacao
    })
})

export default app;