const fs = require('fs');

class InstrumentoCrud {

    constructor() {
        this.filePath = './src/files/instrumentos.json';
    }

    criar( instrumento ) {
        const data = JSON.parse( fs.readFileSync( this.filePath, 'utf-8' ));
        data.push({
                    codigo: instrumento.getCodigo,
                    nome: instrumento.getNome,
                    tipo: instrumento.getTipo,
                    estado: instrumento.getEstado,
        })
            fs.writeFileSync( 
                this.filePath, 
                JSON.stringify(data, null, 2),
                'utf-8' 
        );
    }

    consultar( nomeResposta ) {
        const data = JSON.parse( fs.readFileSync( this.filePath, 'utf-8' ));
        const instrumentoEncontrado = data.find((instrumento) => instrumento.nome === nomeResposta);
        instrumentoEncontrado ? console.log(instrumentoEncontrado) : console.log('Instrumento não encontrado');
    }

}

module.exports = InstrumentoCrud;