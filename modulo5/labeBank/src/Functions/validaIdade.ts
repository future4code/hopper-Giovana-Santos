export const calculadora = (valor: string) => {
    const separador: string[] = valor.split("/")
    const DIA: number = Number(separador[0])
    const MES: number = Number(separador[1])
    const ANO: number = Number(separador[2])
  
    const dataAtual: Date = new Date()
    const diaAtual: number = dataAtual.getDate()
    const mesAtual: number = dataAtual.getMonth() + 1
    const anoAtual: number = dataAtual.getFullYear()
  
    let data: number
  
    mesAtual >= MES && diaAtual >= DIA ? data = anoAtual - ANO : data = anoAtual - ANO - 1
  
    return data

}
export const validaIdade = (dataDeNascimento: string) : boolean => {
    const idade = calculadora(dataDeNascimento)
    return idade >= 18 ? true : false
}