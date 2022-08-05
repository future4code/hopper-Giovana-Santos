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

