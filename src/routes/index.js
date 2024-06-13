import express from 'express';
import conta from './conta.js';
import transacao from './transacao.js';

const router = (app) => {
    app.use(express.json(), conta, transacao);
}

export default router;