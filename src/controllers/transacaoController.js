import db from '../config/dbConnect.js';

class transacaoController {

    static listarTransacoes(req, res, next) {
        let id = req.query.id
        id = parseInt(id)
        let queryGet = 'SELECT t.id, t.forma_pagamento, c.conta_id, t.valor, t.status from transacao as t  INNER JOIN conta as c ON t.conta_id = c.id;'
        if (id) {
        queryGet = `SELECT t.id, t.forma_pagamento, c.conta_id, t.valor, t.status from transacao as t  INNER JOIN conta as c ON t.conta_id = c.id WHERE c.conta_id = ${id};`
        }

        db.query(queryGet, function (err, results) {
            if (err) {
                console.error('Erro ao realizar sua pesquisa: ', err)
                return res.status(404).json({ error: 'Item não encontrado.' })
            }
            let resultadoFinal = results.map(item => {
                return {
                    forma_pagamento: item.forma_pagamento,
                    conta_id: item.conta_id,
                    valor: item.valor
                }
            })
            res.status(200).json(resultadoFinal)
        })
    }

    static cadastrarTransacao(req, res, next) {
        const { forma_pagamento, conta_id, valor } = req.body;
        
        const queryPost = `INSERT INTO transacao (forma_pagamento, conta_id, valor) VALUES ('${forma_pagamento}', (SELECT id FROM conta WHERE conta_id = ${conta_id}), ${valor});`;
        if (!forma_pagamento || !conta_id || !valor) {
            res.status(400).json({
                message: "Os campos forma_pagamento, conta_id e valor são obrigatórios",
                status: 400
            })
        }
        db.query(queryPost, function (error, results) {
            if (error) {
                console.error('Erro ao inserir os dados no banco de dados: ', error)
                return res.status(500).json({ error: 'Erro ao inserir os dados no banco de dados.' })
            }
            res.status(201).json({ message: 'Dados inseridos com sucesso' })
        })
    }

}


export default transacaoController;