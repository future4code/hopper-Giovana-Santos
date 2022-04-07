/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   //Montando o jogo 

const somaCartas = (carta1, carta2) => {
   return carta1.valor + carta2.valor
}

const resultado = (valorUsu, valorComp) => {
   if (valorUsu > valorComp) {
      console.log ("O usuario ganhou!")
   } else if (valorUsu < valorComp) {
      console.log ("O computador ganhou!")
   } else {
   console.log ("Empate!")
   }
}

//o que fazer se o usuário clicar "cancelar"
//o que fazer se o usuário clicar "ok"

console.log("Seja muito bem-vindo ao nosso jogo de Blackjack!.")
let boaPartida = confirm("Quer iniciar uma nova rodada?")
if (boaPartida === false) {
   console.log ("O jogo acabou.")
} else {
const cartaUsu1 = comprarCarta()
const cartaUsu2 = comprarCarta()
const cartaComp1 = comprarCarta()
const cartaComp2 = comprarCarta()

const valorUsu = somaCartas (cartaUsu1, cartaUsu2)
const valorComp = somaCartas (cartaComp1, cartaComp2)

console.log (`Usuario - cartas: ${cartaUsu1.texto} ${cartaUsu2.texto} - ${valorUsu}\nComputador - cartas: ${cartaComp1.texto} ${cartaComp2.texto} - ${valorComp}`)
resultado(valorUsu, valorComp)
}

