```js
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
    let numero = 0
    let novaArray = []
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if(arrayDeNumeros[i] == numeroEscolhido){
                novaArray.push(1)
            }
        }
        if(novaArray.length > 0){
            return `O número ${numeroEscolhido} aparece ${novaArray.length}x`
        } else {
            return "Número não encontrado"
        }
    }
```