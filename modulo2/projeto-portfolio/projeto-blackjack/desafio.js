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


    

    let confirmation = confirm('Bem-vindo ao jogo blackjack!\nQuem você quer começar um novo jogo?')
    let player = [];
    let computer = [];

    if(confirmation == true){
      player.push(comprarCarta(), comprarCarta())
      computer.push(comprarCarta(), comprarCarta())

      if ((player[0].valor == 11 && player[1].valor == 11) || (computer[0].valor == 11 && computer[1].valor == 11)){
      player = []
      computer = []
   } else {
      confirmation = true
   };

    let cartaTexto = (array) => array.map((carta) => carta.texto)
    
    let cartaValor = (array) => array.map((carta) => carta.valor)
    
    let cartaSoma = (array) => array
      .map((carta) => carta.valor)
      .reduce((primeiroValor, valorArray) => primeiroValor + valorArray ,0)
    
    let i = 0
    pergunta = false

    while (pergunta = confirm(`Suas Cartas são: ${cartaTexto(player).join(" ")}. A carta revelado do computador é: ${computer[0].texto}\nQuer comprar mais um carta?`) === true) {
      player.push(comprarCarta())
      pergunta++
      if(cartaSoma(player) > 21){
         break
      }
    }

    while (cartaSoma(computer) < 18){
       computer.push(comprarCarta())
    }
   
   if(cartaSoma(player) == cartaSoma(computer)) {
      alert(`Suas Cartas são: ${cartaTexto(player).join(" ")}.Seus pontos são: ${cartaSoma(player)}.\nA carta do computador é: ${cartaTexto(computer).join(" ")}.Os pontos do computador são: ${cartaSoma(computer)}.\nEMPATOU!!`)
    } else if (cartaSoma(player) > 21 && cartaSoma(computer) > 21) {
      alert(`Suas Cartas são: ${cartaTexto(player).join(" ")}.Seus pontos são: ${cartaSoma(player)}.\nA carta do computador é: ${cartaTexto(computer).join(" ")}.Os pontos do computador são: ${cartaSoma(computer)}.\nNINGUÉM GANHOU!!`)
    } else if (cartaSoma(computer) > 21 || cartaSoma(player) > cartaSoma(computer) && cartaSoma(player) <= 21) {
      alert(`Suas Cartas são: ${cartaTexto(player).join(" ")}. Seus pontos são: ${cartaSoma(player)}.\nA carta do computador é: ${cartaTexto(computer).join(" ")}.Os pontos do computador são: ${cartaSoma(computer)}.\nVOCÊ GANHOU!!`)
    } else {
      alert(`Suas Cartas são: ${cartaTexto(player).join(" ")}.Seus pontos são: ${cartaSoma(player)}.\nA carta do computador é: ${cartaTexto(computer).join(" ")}.Os pontos do computador são: ${cartaSoma(computer)}.\nCOMPUTADOR GANHOU!!`)
    } 

   } else{
      alert('Fim de jogo!')
   };
         