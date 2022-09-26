import connection from "../dataBase/connection";

export const selecionaProdutos = async (productId: string):Promise<any> => {
  const resultado = await connection("labecommerce_products")
  .select()
  .where("id", "like", `%${productId}%`)
  
  return resultado
}