import ErroBase from "../erros/ErroBase.js";
import NaoEncontrada from "../erros/NaoEncontrada.js";

const manipuladorDeErros = (erro, req, res, next) => {
    if (erro instanceof NaoEncontrada) {
        console.log(erro)
        erro.enviarResposta(res)
    } else {
        new ErroBase().enviarResposta(res)
    }
}

export default manipuladorDeErros;