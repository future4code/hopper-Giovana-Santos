//Ex 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const filmes = (nome:string, anoLancado: number, genero: GENERO, pontuacao?: number) => {
    return {
        nome,
        anoLancamento: anoLancado,
        genero,
        pontuacao
    }
}
console.log(filmes("Duna", 2021, GENERO.ACAO, 74))