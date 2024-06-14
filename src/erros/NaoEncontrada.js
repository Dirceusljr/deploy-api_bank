import ErroBase from "./ErroBase.js";

class NaoEncontrada extends ErroBase{
    constructor(mensagem = 'Não encontrado!') {
        super(mensagem, 404)
    }
}

export default NaoEncontrada;