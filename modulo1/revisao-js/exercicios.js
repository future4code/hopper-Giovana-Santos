// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 return array.sort(function(a, b) {
     return a - b;
})
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(pares => (pares %2)== 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((pares) => pares %2== 0)
    .map((pares) => pares **2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
    for (let i = 1; i < array.length; i++) {
        if(array[i] > maiorNumero){
        maiorNumero = array[i];
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maiorNumero
   let menorNumero
   if (num1 > num2){
       maiorNumero = num1
       menorNumero = num2
   } else {
       maiorNumero = num2
       menorNumero = num1
   }
   let diferenca = maiorNumero - menorNumero
   return {
       maiorNumero: maiorNumero,
       maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
       diferenca: maiorNumero - menorNumero
   }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let primeiroNumero = [];
   for (let i = 0; primeiroNumero.length < n; i++) {
      if ( i % 2 == 0) { 
          primeiroNumero.push(i);
      }  
   }
   return primeiroNumero;
}
   console.log(retornaNPrimeirosPares(n));

retornaNPrimeirosPares()
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 if(ladoA == ladoB && ladoB == ladoC){
    return "Equilátero"
 }else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
    return "Isósceles"
 } else {
     return "Escaleno"
 }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let tamanho = array.sort ((a, b) => a - b)
    return [tamanho[array.length-2], tamanho[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome:"ANÔNIMO",}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.idade > 14 && pessoa.altura >= 1.5 && pessoa.idade < 60 )
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => !(pessoa.idade > 14 && pessoa.altura >= 1.5 && pessoa.idade < 60))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (const conta of contas) {
        let valor = 0

        for (const compra of conta.compras) valor += compra
        
        conta.saldoTotal -= valor
        conta.compras = []
    }
    return contas  
    }
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => {
        if (a.nome < b.nome){
            return -1
        } else if (a.nome > b.nome){
            return 1
        } else {
            return 0
        }
    })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => {
        let parseA = a.dataDaConsulta.split('/')
        let dataA = new Date(parseA[2], parseA[1] -1, parseA[0])
        let parseB = b.dataDaConsulta.split('/')
        let dataB = new Date(parseB[2], parseB[1] -1, parseB[0])

            if(dataA < dataB){
            return -1
            } else if (dataA > dataB){
             return 1
            }else {
            return 0
        }
    })
}