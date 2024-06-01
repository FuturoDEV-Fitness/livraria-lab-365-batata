const readline = require('readline/promises');
const Livro = require('./classes/Livro');
const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nome = await rl.question("Qual o nome do livro?");
            const autor = await rl.question("Qual o nome do autor?");
            const paginas = await rl.question("Qual a quantidade de paginas?");
            const genero = await rl.question("Qual o genero do livro?");

            const livro = new Livro (nome, autor, paginas);
            livro.setGenero = genero;

            const crud = new LivroCrud();
            crud.criar(livro);



            rl.close();


            /* Coloque sua resposta aqui */
            

            break;
        case 'deletar': {
            /* Coloque sua resposta aqui - filter */
            rl.close();
            break;
        }
        case 'consultar': {
            const palavra = await rl.question("Qual o nome do livro?");

            const crud = new LivroCrud(palavra);
            crud.consultar(palavra);
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
