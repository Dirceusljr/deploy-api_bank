import db from "../config/dbConnect.js"

const obterSaldo = (conta_id) => {
    return new Promise((resolve, reject) => {
        const queryGetSaldo = `SELECT saldo from conta WHERE conta_id = ${conta_id};`
        db.query(queryGetSaldo, function (err, results) {
            if (err) {
                console.error('Erro ao realizar sua pesquisa: ', err)
                reject('Item não encontrado.')
            }
            const saldoRecebido = results[0].saldo
            console.log(saldoRecebido, typeof(saldoRecebido));
            resolve(saldoRecebido)
        })
    })
}

export default obterSaldo;