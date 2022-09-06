// Alternativa A
//entrada: array de números.
//saida: objetos de números.

const obterEstatisticas = (numeros: number[]) => {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([1,2,3,4,5,6,7]))
//Alternativa B
//As outras variaveis que compõm essa função é uma array de números chamada "numerosOrdenados", a "soma" que recebe somente numeros e o "estatisticas" que recebe um objeto de numeros.

//Alternativa C
type Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros: number[]) => {}
}