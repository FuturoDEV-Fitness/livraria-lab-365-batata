const crypto = require('crypto');

class Instrumento {

    #codigo = ""
    #nome = ""
    #tipo = ""
    #estado = ""

    constructor( nome ) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
    }

    get getCodigo() { return this.#codigo; }
    get getNome() { return this.#nome; }
    get getTipo() { return this.#tipo; }
    get getEstado() { return this.#estado; }

    set setCodigo( codigo ) { this.#codigo = codigo; }
    set setNome( nome ) { this.#nome = nome; }
    set setTipo( tipo ) { this.#tipo = tipo; }
    set setEstado( estado ) { this.#estado = estado; }
}

module.exports = Instrumento;