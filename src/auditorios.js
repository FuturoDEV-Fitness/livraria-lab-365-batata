const readline = require('readline/promises');
const Auditorio = require('./classes/Auditorio.js');
const AuditorioCrud = require('./classes/AuditorioCrud.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar': {
            const nome = await rl.question('Informe o nome do auditorio: ');
            const descricao = await rl.question('Informe a descrição do auditorio: ');
            const capacidade = await rl.question('Informe a capacidade do auditorio: ');

            const auditorio = new Auditorio(nome);
            auditorio.descricao = descricao;
            auditorio.capacidade = capacidade;

            console.log(auditorio.toString());
            rl.close();
            const auditorioCrud = new AuditorioCrud();
            auditorioCrud.criar(auditorio)

            break;
        }
        case 'deletar': {
            const nome = await rl.question('Informe o nome do auditorio: ');
            const auditoriaCrud = new AuditorioCrud();
            auditoriaCrud.deletar(nome);
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        case 'alterar': {
            const nomeAlteracao = await rl.question('Informe o nome do auditorio que você deseja alterar: ');
            const nomeNovo = await rl.question('Informe o nome do auditorio: ');
            const descricaoNovo = await rl.question('Informe a descrição do auditorio: ');
            const capacidadeNovo = await rl.question('Informe a capacidade do auditorio: ');
            const auditoriaCrudAlteracao = new AuditorioCrud();
            auditoriaCrudAlteracao.alterar(nomeAlteracao, nomeNovo, descricaoNovo, capacidadeNovo);
            rl.close();
            break;
        }

        case 'consultar': {
            const nome = await rl.question('Informe o nome do auditorio: ');
            const auditoriaCrud = new AuditorioCrud();
            auditoriaCrud.consultar(nome);
            rl.close();
            break;
        }
        case 'sair': {
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
