const fs = require('fs');

class AuditorioCrud {
    // #filePath = './src/files/auditorios.json';
    constructor() {

        this.filePath = './src/files/auditorios.json';

    }
    criar(auditorio) {
        const conteudo = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        conteudo.push({
            nome: auditorio.nome,
            descricao: auditorio.descricao,
            capacidade: auditorio.capacidade,
            codigo: auditorio.codigo
        });
        fs.writeFileSync(this.filePath,
            JSON.stringify(conteudo, null, 2),
            'utf-8');
        console.log('Auditorio criado com sucesso');
    }

    consultar(auditorio) {
        const conteudo = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const resposta = conteudo.find((item) => item.nome === auditorio);
        if (resposta) {
            return console.log(resposta);
        }
        return console.log('Auditorio não encontrado');
    }

    deletar(auditorio) {
        const conteudo = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const auditórioEncontrado = conteudo.find((item) => item.nome === auditorio);
        console.log(auditórioEncontrado)
        if (!auditórioEncontrado) {
            return console.log('Auditório não encontrado.');
        } else {
            const resposta = conteudo.filter((item) => item.nome !== auditorio);
            fs.writeFileSync(this.filePath,
                JSON.stringify(resposta, null, 2),
                'utf-8');
            return console.log('Auditorio deletado com sucesso');
        }
    }

    alterar(nomeAntigo, nomeNovo, descricao, capacidade) {
        const conteudo = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        let auditórioEncontrado = false;
        const resposta = conteudo.map((item) => {
            if (item.nome === nomeAntigo) {
                auditórioEncontrado = true;
                return {
                    nome: nomeNovo,
                    descricao: descricao,
                    capacidade: capacidade,
                    codigo: item.codigo
                }
            }
            return item;
        });
        if (auditórioEncontrado) {
            console.log('Auditorio alterado com sucesso');
            fs.writeFileSync(this.filePath,
                JSON.stringify(resposta, null, 2),
                'utf-8');
        } else {
            return console.log('Auditorio não encontrado');
        }

    }
}

module.exports = AuditorioCrud;