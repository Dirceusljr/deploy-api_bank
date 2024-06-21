import db from '../config/dbConnect.js';

class taxaController {

    static listarTaxa(req, res, next) {
        try {
            let tipoTaxa = req.query.tipo
            let queryGet = 'SELECT * FROM taxa;'
            if (tipoTaxa) {
                queryGet = `SELECT * FROM taxa WHERE taxa = '${tipoTaxa}'; ;`
            }

            db.query(queryGet, function (err, results) {
                if (err) {
                    console.error('Erro ao realizar sua pesquisa: ', err)
                    return res.status(404).json({ error: 'Item não encontrado.' })
                }
                let resultadoFinal = results.map(item => {
                    return {
                        taxa: item.taxa,
                        percentual: item.percentual
                    }
                })
                res.status(200).json(resultadoFinal)
            })
        } catch (error) {
            next(error)
        }
    }

    static async cadastrarTaxa(req, res, next) {
        try {
            let { taxa, percentual } = req.body;
            percentual = parseFloat(percentual);
            if (!taxa || !percentual) {
                res.status(400).json({
                    message: "Os campos taxa e percentual são obrigatórios",
                    status: 400
                })
            }
            const queryPost = `INSERT INTO taxa (taxa, percentual) VALUES ('${taxa}', ${percentual});`;

            db.query(queryPost, function (error, results) {
                if (error) {
                    console.error('Erro ao inserir os dados no banco de dados: ', error)
                    return res.status(500).json({ error: 'Erro ao inserir os dados no banco de dados.' })
                }
                return res.status(201).json({
                    message: 'Nova taxa cadastrada com sucesso',
                    nova_taxa: {
                        taxa,
                        percentual
                    }
                })
            })
        } catch (error) {
            next(error)
        }
    }

    static atualizarTaxa(req, res, next) {

    }

}


export default taxaController;