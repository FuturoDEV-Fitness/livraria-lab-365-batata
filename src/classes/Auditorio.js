const crypto = require('crypto');

class Auditorio {
    #codigo = 0;
    #nome = "";
    #descricao = "";
    #capacidade = 0;

    constructor(nome) {
        this.nome = nome;
        this.codigo = crypto.randomUUID();

    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(codigo) {
        this.#codigo = codigo;
    }
    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    get descricao() {
        return this.#descricao;
    }
    set descricao(descricao) {
        this.#descricao = descricao;
    }
    get capacidade() {
        return this.#capacidade;
    }
    set capacidade(capacidade) {
        this.#capacidade = capacidade;
    }
    toString() {
        return `Auditorio {
            Codigo: ${this.#codigo},
            Nome: ${this.#nome},
            Descricao: ${this.#descricao},
            Capacidade: ${this.#capacidade}
        }`;
    }



}

module.exports = Auditorio;