import connection from "../dataBase/connection";

export const selecionaUsuarios = async ():Promise<any> => {
  const resultado = await connection("labecommerce_users").select()
  return resultado
}