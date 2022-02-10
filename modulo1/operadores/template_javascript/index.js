/*
        Questão 1
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

        A resposta para o bool3 é true pois é o oposto de false 
    
    let resultado = bool1 && bool2
    console.log("a.", false)

    resultado = bool1 && bool2 && bool3
    console.log("b.", false)

    resultado = !resultado && (bool1 ││ bool2)
    console.log("c", true)

    resultado = !false && true 
    console.log ("d.", typeof resultado)
     
        O typeof da letra d é boolean

        Questão 2


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

Com a falta da conversão do prompt para number, o resultado
acaba sendo concatenado e com isso o resultado sera juntado 
em um unico numero, e nao somado.

        Questão 3
let primeiroNumero = Number( prompt("Digite um numero!"))
let segundoNumero = Number( prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

   //Questão1
const nome = prompt ("Qual é sua idade?")
const amigo = prompt ("Qual a idade do seu melhor amigo(a)?")

console.log ("sua idade é maior do que a do seu amigo(a)?", nome >= amigo)

    //Questão2
const par = prompt ("digite um número par")
console.log( par % 2)

    //Sim, todos os resultados deram 0.
    // Todos os numeros impar deram 1, pela condição que deram
    // que seria dividir por 2.

    //Questão 3
const idade = prompt ("Qual sua idade?")
console.log ("Sua idade em meses é de:", idade * 12, "Meses")
console.log ("Sua Idade em dias é de:" , idade * 365, "Dias")
console.log ("Sua Idade em horas é de:" , idade * 8760, "Horas")

    //Questão 4
const numero1 = prompt ("digite um número")
const numero2 = prompt ("digite outro número")

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 == numero2)
console.log("o primeiro numero é divisivel pelo segundo", numero1 % numero2 ==0)
console.log("o segundo numero é divisivel pelo primeiro", numero2 % numero1 ==0)




