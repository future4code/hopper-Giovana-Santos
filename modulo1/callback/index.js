//ATIVIDADE CALLBACK - Exercícios de interpretação de código

// 1- A) Sera impresso três novos tipos de array, contendo em cada uma delas um nome e um apelido. 

//------------------------------------------------------

//2- A)Sera impresso os nomes em apenas uma array.

//------------------------------------------------------
//3- A)Sera impresso os nomes que nao tem o apelido "chijo", dentro de uma nova array.

//----------------------------------------------
// Exercícios de escrita de código
// Questão 1 / Alternativa A

let nomePets = [
    {nome: "Lupin", raca: "Salsicha"},
    {nome: "Polly", raca: "Lhasa Apso"},
    {nome:"Madame", raca:"Poodle"},
    {nome:"Quentinho", raca:"Salsicha"},
    {nome:"Fluffy", raca:"Poodle"},
    {nome:"Caramelo", raca:"Vira-lata"}
];
let novoPets = nomePets.map(item => {return item.nome})
 console.log(novoPets)

 //--------------------------------------------
 // Alternativa B
let apenasRaca = nomePets.filter(item => item.raca === "Salsicha")
console.log(apenasRaca)

//---------------------------------------------
// Alernativa C

let clientePet = nomePets
    .filter (item => item.raca === "Poodle")
    .map (item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} `)
console.log (clientePet)

//-----------------------------------------------
//Questao 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //Alternativa A

 const novoProduto = produtos.map(item => {return item.nome})
 console.log(novoProduto)

 //Alternativa B
 const desconProduto = produtos.map((item) => ({nome: item.nome, preço: (item.preco * 0.95).toFixed(2) }))
 console.log(desconProduto)

 //Alternativa C
 let biritinhas = produtos.filter(item => item.categoria === "Bebidas")
 console.log(biritinhas)

 //Alternativa D
 let soYpe = produtos.filter (item => item.nome.includes("Ypê"))
 console.log(soYpe)

//Alternativa E
 let promocaoYpe = produtos
    .filter (item => item.nome.includes("Ypê"))
    .map (item => `Compre ${item.nome} por ${item.preco}.`)
 console.log (promocaoYpe)


 