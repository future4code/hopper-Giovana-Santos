//Exercício 2 

const primeiroValor = Number(process.argv[3])
const segundoValor = Number(process.argv[4])

switch (process.argv[2]) {
    case 'add':
        console.log(primeiroValor + segundoValor)
    break;
    case 'sub':
        console.log(primeiroValor - segundoValor)
    break;
    case 'mult':
        console.log(primeiroValor * segundoValor)
    break;
    case 'div':
        console.log(primeiroValor / segundoValor)
    break;

    default:
        break;
}
