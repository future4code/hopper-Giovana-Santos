import connection from "../dataBase/connection";

export const selecionaComprasUsuario = async (userId: string):Promise<any> => {
  const resultado = await connection("labecommerce_purchases")
  .select()
  .where("user_id", "like", `%${userId}%`)
  
  return resultado
}