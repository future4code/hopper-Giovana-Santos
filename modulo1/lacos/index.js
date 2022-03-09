//EXERCICIOS lAÇOS - Interpretação

//Questao 1
// A) Ele cria uma variaveis dada como zero, e soma seu valor com a indice 
//ate o momento que a indice for menor que 5.
// B)resultado impresso é 10

//-------------------------------

//Questão 2
// A)a) O que vai ser impresso no console?
// R: 19, 21, 23, 25, 27,30
// B)Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of...
// é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R:Não, para acessas o indice de cada elemento apenas com "for".

//----------------------------------

//Questão 3
//R: *
//   **
//   ***
//   ****

//------------------------------------

//Exercicio Laços - Escrita
//Questão 1 

const animalEstimacao = Number(prompt("Quantos bichinos de estimação você tem?"))
let bichinhos = []
if (animalEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet!")
}else {
    while (bichinhos.length < animalEstimacao) {
        bichinhos.push(prompt("Digite os nomes de cada pet:"))
         
    }
}
console.log(`O nome dos seus pets é : ${bichinhos}`)

//Questão 2

let arrayOriginal =[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

console.log("-------------------------------------------")
//Alternativa A

function letraA(array) {
   let i = 0 
   
    while( i < array.length){
        let valor = array[i]
        i++    
        console.log(valor)
    }
}
letraA (arrayOriginal)

//ALTERNATIVA B
console.log ("-------------------------------------------")
function letraB(array){

for (let i = 0; i < array.length; i++) {
    const valor = array[i];
    let resultado = valor/10
    console.log(resultado)
    }
}
letraB(arrayOriginal)

console.log ("--------------------------------------------")
//ALTERNATIVA C

function letraC(array) {
    let pares = []
    for (const valor of array) {
        if(valor % 2 === 0)
        pares.push(valor) 
    }
    console.log (pares)
}
letraC(arrayOriginal)

console.log ("----------------------------------------------")
//ALTERNATIVA D

function letraD(array)   {
    let novoArray = []  
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        novoArray.push(`O elemento do index ${i} é ${elemento}.`)
        
    }
    console.log(novoArray)
}
letraD(arrayOriginal)

console.log ("------------------------------------------------")
//ALTERNATIVA E
//MAXIMO

function letraEMaior(array){
    let valorMaximo = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] > valorMaximo) {
        valorMaximo = array[i]
        }
    }
    let valorMinimo = valorMaximo
    for (let i = 0; i < array.length; i++) {
        if(array[i] < valorMinimo)
        valorMinimo = array[i]
    }
    console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
}
letraEMaior(arrayOriginal)

