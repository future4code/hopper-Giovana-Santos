/*
    1 - interpretação de codigo.

    a) Não foi definida(undefined), pois não foi
    colocada nada dentro da variavel.
    
    b) A array foi definida null, pois foi dado a variavel
    null.
    
    c) O length estava querendo saber tamanho da array
    e o resultado foi 11, pois ela tem 11 numeros.
    
    d) Mostrar o primeiro indice de array, ja que a
    variavel i é igual a zero.

    e) Ele vai mudar o primeiro indice por 19.

    f) Ele mostra o sexto indice da array.

    2-Em primeira situação ele aumentou as letras atraves do toUpperCase:
            "SUBI NUM ÔNIBUS EM MARROCOS"
      Em segunda situação ele pede para trocar o A pelo I, com o replaceAll:
            "SUBI NUM ÔNIBUS EM MIRROCOS"
      Em terceira situação ele pede o tamanho da frase usando o .length:
            27 
*/ 

    // 1) Escrita de codigo

    const nome = prompt("Qual é o seu nome?")
    const email = prompt("Digite seu emai:")

    console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vida(o), ${nome}!`)

    // 2) Escrita de codigo

    let comidasFavoritas = ["Brócolis", "Chocolate", "Sonho", "Milho", "Sushi"]
   
    console.log(comidasFavoritas)
    console.log("Essas são minhas comidas favoritas:")
    console.log(comidasFavoritas[0])
    console.log(comidasFavoritas[1])
    console.log(comidasFavoritas[2])
    console.log(comidasFavoritas[3])
    console.log(comidasFavoritas[4])

    const comidasUsuario = prompt("Qual é sua comida favorita?")
    const i = 0

    comidasFavoritas[0+1] = comidasUsuario
    console.log(comidasFavoritas)

    //3) Escrita de codigo

    let listaDeTarefas = []
    listaDeTarefas1 = prompt("Digite primeira tarefa a ser realizada hoje:")
    listaDeTarefas2 = prompt("Digite segunda tarefa a ser realizada hoje:")
    listaDeTarefas3 = prompt("Digite terceira tarefa a ser realizada hoje:")

    console.log(listaDeTarefas=[listaDeTarefas1, listaDeTarefas2, listaDeTarefas3])

    const tarefaUsuario= Number (prompt("Digite de 1 a 3 qual dessas tarefas você ja realizou:"))
    const usuario = [tarefaUsuario -1]
    listaDeTarefas.splice (usuario, 1)
    console.log (listaDeTarefas)
    

