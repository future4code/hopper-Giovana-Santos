import connection from "../dataBase/connection";

async function selectUser(name : string):Promise<any>{
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .where({name})
  return result
}
export default selectUser;