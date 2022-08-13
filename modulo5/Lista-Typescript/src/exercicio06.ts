//Ex 6

type Banco = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const contasBancarias: Banco[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
const divida = (array: Banco[]): object[] => {
    return array.map(cliente => {
        return{
            ...cliente,
            saldoTotal: cliente.debitos
            .reduce((atual: number, proximo: number) => atual - proximo, cliente.saldoTotal),
            debitos:[]
        }
    }).filter(negativado => negativado.saldoTotal < 0)
}
console.log(divida(contasBancarias))