const readline = require('readline/promises');
const Instrumento = require('./classes/Instrumento');
const InstrumentoCrud = require('./classes/IntrumentoCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const instrumentos = new Instrumento();
            const nomeResposta = await rl.question('Digite o nome do instrumento: ');
            instrumentos.setNome = nomeResposta;
            const tipoResposta = await rl.question('Digite o tipo do instrumento (violão, piano, guitarra): ');
            instrumentos.setTipo = tipoResposta;
            const estadoResposta = await rl.question('Digite o estado do instrumento (danificado, novo, usado): ');
            instrumentos.setEstado = estadoResposta;

            const instrumentosCrud = new InstrumentoCrud();
            instrumentosCrud.criar(instrumentos);
        
            rl.close();
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            
            rl.close();
            break;
        }
        case 'consultar': {
            const nomeResposta = await rl.question('Digite o nome do instrumento: ');
            const instrumentosCrud = new InstrumentoCrud();
            instrumentosCrud.consultar(nomeResposta);
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
