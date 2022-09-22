import PromptSync = require('prompt-sync');
const prompt = PromptSync();

let option: number;
let estoque: string [] = [];

do{
    console.clear();
    console.log(`1 - dicionar item`);
    console.log(`2 - deletar item`);
    console.log(`3 - trocar os dados`);
    console.log(`4 - Listar estoque`);
    console.log(`5 - Sair`);
    option = Number(prompt('>> '));
    console.clear();
    switch(option){
        case 1:
            let nomeProduto = prompt('diga o nome do produto: ');
            estoque.push(nomeProduto)
            break;

        case 2:
            let i=0;
            estoque.forEach((item) => {
                console.log(`identificação: ${i}`);
                console.log(`diga o nome do produto: ${item}\n`);
                i++;
            })
            let id = Number(prompt('digite a identificaçao do produto: '));
            estoque.splice(id, 1);
            prompt('item excluido!');
            break;
            
        case 3:
            i=0;
            estoque.forEach((item) => {
                console.log(`identificação: ${i}`);
                console.log(`diga o nome do produto: ${item}\n`);
                i++;
            })
            id = Number(prompt('diga a identificação do produto: '));
            estoque.splice(id, 1);
            prompt('item removido! diga um novo produto:');
            nomeProduto = prompt('diga o nome do produto: ');
            estoque.push(nomeProduto)
            break;
            
        case 4:
            i=0;
            estoque.forEach((item) => {
                console.log(`ID: ${i}`);
                console.log(`diga o nome do produto: ${item}\n`);
                i++;
            })
            prompt('itens na lista!');
            break;
            
        case 5:
            prompt('obrigado volte sempre...');
            break;
            
        default:
            prompt('diga uma opção valida');
    }
}while(option != 5);