//Exercício 1 
//A)  Para acessar os parâmetros passados na linha de comando para o Node, utilizamos o process.argv.
// O primeiro argumento é o proprio node, o segundo é o "nome_do_arquivo.extensão" e por fim o terceiro argumento, é o valor a ser acessado.

//B)
    const nome = process.argv[2]
    const idade = process.argv[3]

    console.log("\033[1;35mOlá, " + nome + "! Você tem " + idade + " anos.")

//C)
    console.log("\033[1;35mOlá, " + nome + "! Você tem " + idade + " anos. Em sete anos você terá " + (Number(idade) + 7) + " anos.")

    