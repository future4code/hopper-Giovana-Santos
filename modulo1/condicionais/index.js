//Exercícios de interpretação de código

    //Questão 1
// A)Se o numero escolhido for multiplo por 2, o comando sera
// "passou no teste.", se não for multiplo, o resultado sera "Não passou no teste.".

//B)Se o numero escolhido for multiplo por 2.

//C)Se não forem multiplos de 2.

    //Questão 2 
//A)O codigo acima é usado para saber o preços das frutas.

//B)O preço da fruta Maça é, R$2.25.

//C)Ele continua até o proximo break adiante, e sera impresso "o preço da fruta pera é R$5".

    //Questão 3
//A)Pedindo um número ao usuario atraves do prompt, usando o metodo de conversão de string para number.

//B)Se o usuario digitar 10 o que sera impresso no console é a mensagem "Esse numero passou no teste",
//pois 10 é maior que 0, agora se o numero escolhido pelo usuario for -10 o console não tera resultado.

//Exercícios de escrita de código

//Questão 1

const usuarioIdade = Number(prompt("Qual sua idade?"))

if (usuarioIdade >= 18){
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
} 

//Questão 2

const periodoEscolar = prompt("Digite seu periodo Escolar utilizando as seguintes siglas M(matutino),V(Vespertino) ou N(Noturno).").toUpperCase()

if (periodoEscolar === "M"){
    console.log("Bom dia aluno(a)!")
} else if (periodoEscolar === "V"){
    console.log("Boa tarde aluno(a)!")  
} else {
    console.log("Boa noite aluno(a)")
}

//Questão 3

const horarioEscolar = prompt("Qual é seu horario de estudo?").toUpperCase()
switch (horarioEscolar) {
    case "M":
        console.log("Bom dia aluno(a)!")     
        break
    case "V":
        console.log("Boa tarde aluno(a)!")
        break
    case "N":
        console.log("Boa noite aluno(a)!")
        break
    default:
        console.log("Olá, seja bem-vindo(a) a turma!")
        break

}

//Questão

const assistirFilme = prompt("Qual gênero de filme vamos assistir?").toLowerCase()
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if (assistirFilme === "fantasia" && valorIngresso < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
