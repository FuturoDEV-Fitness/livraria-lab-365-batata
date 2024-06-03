const readline = require('readline/promises');
const Instrumento = require('./classes/Instrumento');
const InstrumentoCrud = require('./classes/IntrumentoCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const instrumentosCrud = new InstrumentoCrud();
    let continuar = true;

    while (continuar) {
        const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar, consultar todos, sair): ');

    switch (resposta) {
        case 'criar':
            const instrumentos = new Instrumento();
            const nomeResposta = await rl.question('Digite o nome do instrumento: ');
            instrumentos.setNome = nomeResposta;
            const tipoResposta = await rl.question('Digite o tipo do instrumento (ex. violão, piano, guitarra): ');
            instrumentos.setTipo = tipoResposta;
            const estadoResposta = await rl.question('Digite o estado do instrumento (ex. danificado, novo, usado): ');
            instrumentos.setEstado = estadoResposta;
            const precoResposta = await rl.question('Digite o preço do instrumento (ex. 100): ');
            instrumentos.setPreco = precoResposta;
            const ano_de_fabricacaoResposta = await rl.question('Digite o ano de fabricação do instrumento (ex. 2020): ');
            instrumentos.setAno_de_fabricacao = ano_de_fabricacaoResposta;
            instrumentosCrud.criar(instrumentos);
            break;

        case 'deletar': {
            const nomeResposta = await rl.question('Digite o nome do instrumento: ');
            instrumentosCrud.deletar(nomeResposta);
            break;
        }
        case 'consultar': {
            const nomeResposta = await rl.question('Digite o nome do instrumento: ');
            instrumentosCrud.consultar(nomeResposta);
            break;
        }
        case 'alterar': {
            const nomeResposta = await rl.question('Digite o nome do instrumento: ');
            const tipoResposta = await rl.question('Digite o que deseja alterar (ex. nome, tipo, estado, preco, ano_de_fabricacao): ');
            const respostaAlterar = await rl.question('Digite o novo valor: ');
            await instrumentosCrud.alterar(nomeResposta, tipoResposta, respostaAlterar);
            break;
        }
        case 'consultar todos': {
            instrumentosCrud.consultarTodos();
            break;
        }
        case 'sair':{
            continuar = false;
            break;
        }
        default:
            console.log("Ação não reconhecida.");
    }
    }
    rl.close();
}

run();
