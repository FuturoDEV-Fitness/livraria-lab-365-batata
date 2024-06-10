const fs = require('fs');

class InstrumentoCrud {

    constructor() {
        this.filePath = './src/files/instrumentos.json';
    }

    criar(instrumento) {
        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        data.push({
            codigo: instrumento.getCodigo,
            nome: instrumento.getNome,
            tipo: instrumento.getTipo,
            estado: instrumento.getEstado,
            preco: instrumento.getPreco,
            ano_de_fabricacao: instrumento.getAno_de_fabricacao
        })
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(data, null, 2),
            'utf-8'
        );
        console.log(`Instrumento ${instrumento.getNome} criado`);
    }

    consultar(nomeResposta) {
        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const instrumentoEncontrado = data.find((instrumento) => instrumento.nome === nomeResposta);
        instrumentoEncontrado ? console.log(instrumentoEncontrado) : console.log('Instrumento não encontrado');
    }

    deletar(nomeResposta) {
        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const dataIndex = data.findIndex((instrumentoIndex) => instrumentoIndex.nome === nomeResposta);
        if (dataIndex >= 0) {
            data.splice(dataIndex, 1);
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(data, null, 2),
                'utf-8'
            );
            console.log(`Instrumento ${nomeResposta} deletado`)
            return
        }
        console.log('Instrumento não encontrado');
    }

    consultarTodos() {
        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        console.log(data);
    }

    async alterar(nomeResposta, tipoResposta, respostaAlterar) {
        const data = await JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const instrumentoEncontrado = data.find( (inst) => inst.nome === nomeResposta);
        if (instrumentoEncontrado){
          instrumentoEncontrado[tipoResposta] = respostaAlterar
         fs.writeFileSync(
            this.filePath,
            JSON.stringify(data, null, 2),
            'utf-8'
        );
        console.log(`Instrumento ${nomeResposta} alterado o ${tipoResposta} para ${respostaAlterar}`) 
        return
    }
        console.log('Instrumento não encontrado');
    }

}

module.exports = InstrumentoCrud;