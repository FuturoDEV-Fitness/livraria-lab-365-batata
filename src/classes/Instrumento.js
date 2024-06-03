const crypto = require('crypto');

class Instrumento {

    #codigo = ""
    #nome = ""
    #tipo = ""
    #estado = ""
    #preco
    #ano_de_fabricacao

    constructor( nome ) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
    }

    get getCodigo() { return this.#codigo; }
    get getNome() { return this.#nome; }
    get getTipo() { return this.#tipo; }
    get getEstado() { return this.#estado; }
    get getPreco() { return this.#preco; }
    get getAno_de_fabricacao() { return this.#ano_de_fabricacao; }

    set setCodigo( codigo ) { this.#codigo = codigo; }
    set setNome( nome ) { this.#nome = nome; }
    set setTipo( tipo ) { this.#tipo = tipo; }
    set setEstado( estado ) { this.#estado = estado; }
    set setPreco( preco ) { this.#preco = preco; }
    set setAno_de_fabricacao( ano_de_fabricacao ) { this.#ano_de_fabricacao = ano_de_fabricacao; }
}

module.exports = Instrumento;