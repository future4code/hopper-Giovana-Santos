   
  /*
  
     1-Exercícios de interpretação de código.

   a)Será impresso no console o resultado 10 e 50.

   b)Não seria encaminhado para o console, pois necessita desse Comando.

     2-Exercícios de interpretação de código.

    a)toLowerCase vai transforma o texto em caixa baixa e o includes vai procurar saber 
      se tem a variavel cenoura no texto, e dizer se é true ou false.

    b) i. eu gosto de cenoura - true
       ii. cenoura é bom pra vista - true
      iii. cenouras crescem na terra - false

  */
   
    //1-Exercícios de escrita de código.
    //Questão A.

      function meusDados(){
        console.log("Eu sou Giovana, tenho 21 anos, moro em São Paulo e sou estudante.")
        
      }

     meusDados()


    // Questão B.

    function dadosPessoais(nome, idade, cidade, profissao){
      return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`

    }
     
    console.log(dadosPessoais("Giovana", 21, "São Vicente", "Promotora de vendas."))

    //2-Exercícios de escrita de código.
    //Questão A.

    const somarNumero = function(n1, n2){
      return n1 + n2

    }
     
    console.log(somarNumero(2, 5))

    //Questão B.

    const retornaBo = function(n1, n2){
      return n1 >= n2

    }
    
    console.log(retornaBo(2, 5))

    //Questão C.

    const parBo = function(n1){
      return n1 % 4 == 0
    }

    console.log(parBo(1))

    //Questão D.

    let alteraçãoDeTexto = function (texto){
    console.log(texto.length)
    console.log(texto.toLowerCase())

    }

    let texto = "Cenoura é bom pra vista."
    alteraçãoDeTexto(texto)

    //3-Exercícios de escrita de código.

    const operaSoma = function(n1, n2){
      return n1 + n2
    }
    const operaSubi = function (n1, n2){
      return n1 - n2
    }
    const operaMulti = function(n1, n2){
      return n1 * n2
    }
    const operaDivi = function(n1, n2){
      return n1 / n2
    }
    const dadoResultado = function(n1, n2){
    console.log(`Números Inseridos: ${primeiraSoma} e ${segundaSoma}`)
    console.log(`Soma: ${operaSoma(primeiraSoma, segundaSoma)}`)
    console.log(`Diferença: ${operaSubi(primeiraSoma, segundaSoma)}`)
    console.log(`Multiplicação: ${operaMulti (primeiraSoma, segundaSoma)}`)
    console.log(`Divisão: ${operaDivi (primeiraSoma, segundaSoma)}`)
    }
    const primeiraSoma = Number(prompt("digite um numero:"))
    const segundaSoma = Number(prompt("digite outro numero:"))
    
    dadoResultado(primeiraSoma, segundaSoma)

    
     


