import express from 'express';
import conta from './conta.js';
import transacao from './transacao.js';

const router = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Testando rota'))

    app.use(express.json(), conta, transacao);
}

export default router;