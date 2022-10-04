enum DESCRICAO {
    DEPOSITAR = "DEPOSITAR",
    PAGAR = "PAGAR CONTA",
    TRANSFERENCIA = "TRANSFERENCIA"
}
type Transacoes = {
    valor: number,
    data: string, 
    descricao: DESCRICAO
}
type Dados = {
    nome: string,
    cpf: string,
    dataDeNascimento: string,
    saldo: number,
    extrato: Transacoes[]
}
export const clientes: Dados[] = [
    {
        nome: "Giovana",
        cpf: "504.008.774-14",
        dataDeNascimento:"03/08/1978",
        saldo: 20000.00,
        extrato: [{valor: 5000.00, data: "30/03/2000", descricao: DESCRICAO.DEPOSITAR}]
    },
    {
        nome: "Gabriel",
        cpf: "505.008.775-15",
        dataDeNascimento:"03/08/1979",
        saldo: 30000.00,
        extrato: [{valor: 5000.00, data: "30/03/2000", descricao: DESCRICAO.DEPOSITAR}]
    },
    {
        nome: "Laura",
        cpf: "506.008.776-16",
        dataDeNascimento:"03/08/1980",
        saldo: 40000.00,
        extrato: [{valor: 5000.00, data: "30/03/2000", descricao: DESCRICAO.DEPOSITAR}]
    }
]