// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

    const altura = Number(prompt ("Qual a altura do retangulo?"))
    const largura = Number(prompt ("Qual é a largura do retangulo?"))

    console.log (altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

    const anoAtual = Number(prompt("Qual é o ano atual?"))
    const anoNascimento = Number(prompt("Qual o seu ano de nascimento?"))

    console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const email = prompt("Informe seu email:")

    console.log ('Meu nome é ' +nome +', tenho ' +idade + ' anos, e o meu email é ' +email +'.')

}''

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

    const cor1 = prompt("Digite uma cor favorita:")
    const cor2 = prompt("Digite segunda cor favorita:")
    const cor3 = prompt("Digite terceira cor favorita:")

    console.log (Array(cor1, cor2, cor3))

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

    return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const elemento = array[0]

  array[0]=array[array.length-1]
  array[array.length-1]= elemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() == string2.toUpperCase()
} 

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

    const anoAtual = Number(prompt("Em que ano estamos?"))
    const anoNascimento = Number(prompt("Qual seu ano de nascimento"))
    const anoRg = Number(prompt("Qual ano foi a emissão do seu rg?"))

    const idade = anoAtual - anoNascimento
    const emissaoRg = anoAtual - anoRg 

    if (idade <= 20) {
      console.log(emissaoRg >= 5)
    } else if (idade <= 50) {
      console.log(emissaoRg >= 10)
    } else {
      console.log(emissaoRg >= 15)
    }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

    if (ano % 400 == 0) {
      return true
    } else if (ano % 4 == 0 && ano % 100 != 0) {
      return true 
    } else {
      return false
    }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

    const maiorDeIdade = prompt("Você tem mais de 18 anos?")
    const escolaridade = prompt("Você possui ensino medio completo")
    const disponibilidade = prompt("você possui disponibilidade para fazer o curso?")

    console.log(maiorDeIdade == "sim" && escolaridade == "sim" && disponibilidade == "sim")
}
