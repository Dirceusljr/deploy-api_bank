import db from "../config/dbConnect.js"

const atualizarSaldo = (conta_id, novoSaldo) => {
    const queryAtualizar = `UPDATE conta SET saldo = ${novoSaldo} WHERE conta_id = ${conta_id};`
    db.query(queryAtualizar, function (error, results) {
        if (error) {
            console.error('Erro ao atualizar o saldo no banco de dados: ', error)
            return res.status(500).json({ error: 'Erro ao atualizar o saldo no banco de dados.' })
        }
        return true
    })
}

export default atualizarSaldo;