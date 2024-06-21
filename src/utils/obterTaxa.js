import db from "../config/dbConnect.js"

const obterTaxa = (forma_pagamento) => {
    return new Promise((resolve, reject) => {
        const queryGetTaxa = `SELECT id, percentual from taxa WHERE taxa = '${forma_pagamento}';`
        db.query(queryGetTaxa, function (err, results) {
            if (err) {
                console.error('Erro ao realizar sua pesquisa: ', err)
                reject('Item não encontrado.')
            }
            const taxaPercentual = {
                id: results[0].id,
                percentual: results[0].percentual
            }
            resolve(taxaPercentual)
        })
    })
}

export default obterTaxa;