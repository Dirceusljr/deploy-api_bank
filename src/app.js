import express from 'express';
import router from './routes/index.js';


const app = express();
app.use(express.json());
router(app);


app.post('/transacao', (req, res) => {
    const novaTransacao = req.body
    res.status(201).json({
        message: "Transação realizada com sucesso",
        transacao: novaTransacao
    })
})

export default app;