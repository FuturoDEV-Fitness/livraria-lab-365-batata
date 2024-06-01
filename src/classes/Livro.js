class Livro {

    #codigo = '';
    #nome = '';
    #paginas = '';
    #autor = '';
    #genero;


    constructor(nome, autor, paginas) {
       this.#codigo = Math.random();
       this.#nome = nome;
       this.#autor = autor;
       this.#paginas = paginas;
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getNome() {
        return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getAutor() {
        return this.#autor;
    }

    set setAutor(autor) {
        this.#autor = autor;
    }

    get getPaginas() {
        return this.#paginas;
    }

    set setPaginas(paginas) {
        this.#paginas = paginas;
    }

    get getGenero() {
        return this.#genero;
    }

    set setGenero(genero) {
        this.#genero = genero;
    }




}

module.exports = Livro;