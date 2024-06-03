const readline = require('readline/promises');
const Leitor = require('./classes/Leitor');
const LeitorCrud = require('./classes/LeitorCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeLeitor = await rl.question('Informe o nome do leitor: ')

            const leitor = new Leitor(nomeLeitor)  //inicializa a classe

            const rgLeitor = await rl.question('Informe o rg do leitor: ')
            leitor.setRg = rgLeitor

            const cpfLeitor = await rl.question('Informe o cpf do leitor: ')
            leitor.setCpf = cpfLeitor

            const dataNasc = await rl.question('Informe a data de nascimento: ')
            leitor.setDataNascimento = dataNasc

            console.log("Leitor criado com sucesso!")

            const crud = new LeitorCrud()
            crud.criar(leitor)

            rl.close();
            break;

        case 'deletar': {
            const palavra2 = await rl.question('Informe o nome do leitor que deseja deletar: ')
            const crud = new LeitorCrud()
            crud.deletar(palavra2)

            rl.close();
            break;
        }

        case 'consultar': {
            const palavra = await rl.question('Informe o nome do leitor que deseja buscar: ')
            const crud = new LeitorCrud()
            crud.consultar(palavra)

            rl.close();
            break;
        }

        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();