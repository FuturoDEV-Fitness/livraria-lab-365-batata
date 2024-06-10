const crypto = require('crypto')
class Leitor {

    #codigo = ""
    #nome = ""
    #rg = ""
    #cpf = ""
    #dataNascimento = ""

    constructor(nome) {
        this.#nome = nome
        this.#codigo = crypto.randomUUID()
    }

    get getCodigo(){
        return this.#codigo
    }

    get getNome(){
        return this.#nome
    }

    set setNome(nome){
        this.#nome = nome
    }

    get getRg(){
        return this.#rg
    }

    set setRg(rg){
        this.#rg = rg
    }

    get getCpf(){
        return this.#cpf
    }

    set setCpf(cpf){
        this.#cpf = cpf
    }

    get getDataNascimento(){
        return this.#dataNascimento
    }

    set setDataNascimento(dataNasc){
        this.#dataNascimento = dataNasc
    }
}

module.exports = Leitor;