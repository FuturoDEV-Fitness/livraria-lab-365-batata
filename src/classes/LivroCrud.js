const fs = require('fs');


class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }

    criar(livro) {

        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));

        conteudoAtual.push({
            nome: livro.getNome,
            autor: livro.getAutor,
            genero: livro.getGenero,
        })

        console.log(livro);
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual),
            'utf-8'
        )
    }

    consultar(palavra) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));

        const encontrado = conteudoAtual.find(livro => livro.nome === palavra);

        if (encontrado) {
            console.log(encontrado);
        }

        else {
            console.log ("Livro não encontrado!")
        }

    }

}

module.exports = LivroCrud;