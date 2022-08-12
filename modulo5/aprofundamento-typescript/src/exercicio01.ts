//Alternativa A
//A variavel ira reclamar, pois se espera uma string e não um number.

//Alternativa B
//Para uma variavel aceitar mais de um valor é ultilizado o Union types.
//"const meuNumero: tipo1 | tipo2 = valor"

//Alternativa c e D
enum ARCOIRIS {
VIOLETA = "Violeta",
ANIL = "Anil",
AZUL = "Azul",
VERDE = "Verde",
AMARELO = "Amarelo",
LARANJA = "Laranja",
VERMELHO = "Vermelho"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: ARCOIRIS
}

const pessoa1 = {
    nome: "Gabriel",
    idade: 23,
    corFavorita: ARCOIRIS.AMARELO
}
const pessoa2 = {
    nome: "Yummi",
    idade: 1,
    corFavorita: ARCOIRIS.ANIL
}
const pessoa3 = {
    nome: "Simba",
    idade: 1,
    corFavorita: ARCOIRIS.AZUL
}
console.log(pessoa1, pessoa2, pessoa3)