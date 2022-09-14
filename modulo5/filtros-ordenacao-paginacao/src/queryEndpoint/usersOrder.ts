import connection from "../dataBase/connection";

async function usersOrder(order : string):Promise<any>{
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .orderBy(order, "ASC")
  return result
}
export default usersOrder;