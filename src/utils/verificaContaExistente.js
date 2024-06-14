import db from "../config/dbConnect.js";

const verificaContaExistente = (conta_id) => {
    return new Promise((resolve, reject) => {
        const queryVerificaConta = `SELECT EXISTS( SELECT 1 FROM conta WHERE conta_id = ${conta_id}) as contaExistente;`
        db.query(queryVerificaConta, function (err, results) {
            if (err) {
                reject('Erro ao realizar sua pesquisa.')
            }
                const contaExiste = results[0].contaExistente
                resolve(contaExiste)
            })
        })
    }

export default verificaContaExistente;