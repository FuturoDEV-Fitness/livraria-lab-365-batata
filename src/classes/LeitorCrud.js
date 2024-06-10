const fs = require('fs')
class LeitorCrud {

    constructor() {
        this.filePath = './src/files/leitores.json';
        //caminho do arquivo
    }

    criar(leitor){
        /* ler tudo que tem dentro do arquivo Json */
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        /* insere dentro do array recuperando o objeto leitor */
        conteudoAtual.push({
            codigo: leitor.getCodigo,
            nome: leitor.getNome,
            rg: leitor.getRg,
            cpf: leitor.getCpf,
            dataNascimento: leitor.getDataNascimento
        })

        /* escreve no arquivo */
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

    consultar(palavra){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8')) //le o arquivo  

        const leitorEncontrado = conteudoAtual.find(leitor => leitor.nome === palavra)
        if(leitorEncontrado){
            console.log('Leitor encontrado: ',leitorEncontrado)
        }else{
            console.log('Leitor não encontrado!')
        }
    }

    deletar(palavra2){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        const leitorSelecionado =  conteudoAtual.findIndex((item) => item.nome === palavra2)
        if(leitorSelecionado > -1){
            conteudoAtual.splice(leitorSelecionado, 1)

            console.log('Leitor removido com sucesso!')

            /* escreve no arquivo */
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(conteudoAtual, null, 2),
                'utf-8'
            )
        } else{
            console.log('Leitor não encontrado!')
        }
    }

}

module.exports = LeitorCrud;