import express from 'express';
import conta from './conta.js';
import transacao from './transacao.js';
import taxa from './taxa.js';

const router = (app) => {
    app.use(express.json(), conta, transacao, taxa);
}

export default router;