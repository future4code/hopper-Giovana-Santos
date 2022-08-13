//Ex 01

const dados = (nome: string, data: string) => {
  const separador: string[] = data.split('/')

  const dia: string = separador[0] 
  const mes: string = separador[1]
  const ano: string = separador[2]
  return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano ${ano}.`
}

console.log(dados("giovana", "30/03/2000"))
