//  Exercícios de interpretação de código
// 1.a)
//console.log(filme.elenco[0])
//R: Esse comando mostrará o primeiro nome do valor elenco "Matheus Nachtergaele".

// console.log(filme.elenco[filme.elenco.length - 1])
//R: O comando length -1 é referente ao ultimo da lista elenco "Virginia Cavendish".

// console.log(filme.transmissoesHoje[2])
//R: O comando pede para mostrar o indice numero 2 da transmissão que sera o canal "Globo" horario: "14h".

//2.a)
    // console.log(cachorro)
    //O primeiro comando vai dar os dados sobre o cachorro. 
    //nome: 'Juca', idade: 3, raca: 'SRD'

    // console.log(gato)
    //O segundo ele copia e cria um novo obejto com todos os dados do cachorro
    // porem modifica o nome para "Juba".
    //nome: 'Juba', idade: 3, raca: 'SRD'

    // console.log(tartaruga)
    //O terceiro ele copia as informações e inverte a letra "a" por "o" e o nome fica "Jubo".
    //nome: 'Jubo', idade: 3, raca: 'SRD'

    //b)Ele faz a copia de um objeto inteiro e cria um novo objeto.

//3. (A e B)
    //console.log(minhaFuncao(pessoa, "backender"))
    //Em primeira o comando foi impresso "false", atraves da function que 
    //vai procurar no texto se tem backeender e sua resposta que é false.

    //console.log(minhaFuncao(pessoa, "altura"))
    //Sera procurado a informação sobre sua altura, mas pelo fato de nao haver essa informação
    //foi impresso undefined.

//Exercícios de escrita de código
//Questão 1.A

const pessoa = {
    nome: "Giovana",
    apelidos: ["Bahiana", "Estressadinha", "Dona da razão"],
    meuPet: function () {
    return pessoa.meuPet = "Gato"

    }
}
    pessoa.meuPet()
    const frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}, e meu pet é ${pessoa.meuPet}`)
    console.log(frase)

//Questão 1.B

    const novoApelido = {
        ...pessoa,
        apelidos: ["Meu Sonho", "Magrela", "Minnions"]

    }
    console.log (`Atualmente sou chamada por esses apelidos: ${novoApelido.apelidos[0]}, ${novoApelido.apelidos[1]} e ${novoApelido.apelidos[2]}. `)


//Questão 2.A
const objeto1 = {
    nome: "Niommy",
    idade: 19,
    profissao: "Menor Aprendiz"   
}

const objeto2 = {
    nome: "Zé",
    idade: 52,
    profissao:"Ajudante de Pedreiro"
}
function receberObjeto(objeto1, objeto2){
console.log (`${objeto1.nome}, ${objeto1.nome.length}, ${objeto1.idade}, ${objeto1.profissao}, ${objeto1.profissao.length}`) 
console.log (`${objeto2.nome}, ${objeto2.nome.length}, ${objeto2.idade}, ${objeto2.profissao}, ${objeto2.profissao.length}`) 
}
// console.log(receberObjeto(objeto1.nome)),
// console.log(receberObjeto(objeto1.nome.length)),
// console.log(receberObjeto(objeto1.idade)),
// console.log(receberObjeto(objeto1.profissao)),
// console.log(receberObjeto(objeto1.profissao.length))

receberObjeto(objeto1, objeto2)

//Questão 3.A

let carrinho = []

let fruta1 = {
    nome:"banana",
    disponibilidade:true
}
let fruta2 = {
    nome:"morango",
    disponibilidade:true
}
let fruta3 = {
    nome:"abacaxi",
    disponibilidade:true
}

  function recebeFruta(objfruta) {
  carrinho.push(objfruta)  
  return [fruta1, fruta2, fruta3]
  }
  console.log (recebeFruta(carrinho))
  