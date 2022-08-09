//Exercício 1 
//A)  Para acessar os parâmetros passados na linha de comando para o Node, utilizamos o process.argv.
// O primeiro argumento é o proprio node, o segundo é o "nome_do_arquivo.extensão" e por fim o terceiro argumento, é o valor a ser acessado.

//B)
    // const nome = process.argv[2]
    // const idade = process.argv[3]

    // console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//C)
    // console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade) + 7} anos.`)

//Exercício 2 

// const primeiroValor = Number(process.argv[3])
// const segundoValor = Number(process.argv[4])

// switch (process.argv[2]) {
//     case 'add':
//         console.log(primeiroValor + segundoValor)
//     break;
//     case 'sub':
//         console.log(primeiroValor - segundoValor)
//     break;
//     case 'mult':
//         console.log(primeiroValor * segundoValor)
//     break;
//     case 'div':
//         console.log(primeiroValor / segundoValor)
//     break;

//     default:
//         break;
// }

//Exercício 3

const tarefas = [
    "Lavar louça",
    "Lavar Roupa"
]

const novaTarefa = process.argv[2]

if (novaTarefa){
    tarefas.push(novaTarefa)
    console.log("Tarefa adicionada com sucesso!")
} else {
    console.log("Nenhuma tarefa adicionada")
}

console.table(tarefas)