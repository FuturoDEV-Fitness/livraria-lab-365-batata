const fs = require('fs');


class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }

    criar(livro) {

        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));

        conteudoAtual.push({
            codigo: livro.getCodigo,
            nome: livro.getNome,
            autor: livro.getAutor,
            paginas: livro.getPaginas,
            genero: livro.getGenero,
        })

        console.log(livro);
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

    deletar(palavra) {

        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));


        const novosLivros = conteudoAtual.filter(livro => livro.nome !== palavra);

        if (novosLivros.length < conteudoAtual.length) {
            fs.writeFileSync(this.filePath, JSON.stringify(novosLivros, null, 2), 'utf-8');
    
            console.log("Livro deletado!");
        } else {
            console.log("Livro não encontrado!");
        }

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