import db from '../config/dbConnect.js';
import verificaContaExistente from '../utils/verificaContaExistente.js';

class contaController {

    static listarContas(req, res, next) {
        try {
            let id = req.query.id
            id = parseInt(id)
            let queryGet = 'SELECT * FROM conta;'
            if (id) {
                queryGet = `SELECT * FROM conta WHERE conta_id = ${id};`
            }
            db.query(queryGet, function (err, results) {
                if (results.length === 0) {
                    console.error('Erro ao realizar sua pesquisa: ', err)
                    return res.status(404).json({ error: 'Item não encontrado.' })
                }
                let resultadoFinal = results.map(item => {
                    return {
                        conta_id: item.conta_id,
                        saldo: item.saldo
                    }
                })
                res.status(200).json(resultadoFinal)
            })
        } catch (error) {
            next(error)
        }
    }

    static async cadastrarConta(req, res, next) {
        try {
            const { conta_id, saldo } = req.body;
            const queryPost = `INSERT INTO conta (conta_id, saldo) VALUES (${conta_id}, ${saldo});`;
            if (!conta_id || !saldo) {
                res.status(400).json({
                    message: "Os campos conta_id e saldo são obrigatórios",
                    status: 400
                })
            }
            const verificaConta = await verificaContaExistente(conta_id)
            if (verificaConta !== 0) {
                return res.status(400).json({ error: 'Conta já existente.' })
            }
            db.query(queryPost, function (error, results) {
                if (error) {
                    console.error('Erro ao inserir os dados no banco de dados: ', error)
                    return res.status(500).json({ error: 'Erro ao inserir os dados no banco de dados.' })
                }
                res.status(201).json({ message: 'Dados inseridos com sucesso' })
            })
        } catch (error) {
            next(error)
        }
    }

}


export default contaController;