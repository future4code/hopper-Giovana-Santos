import connection from "../dataBase/connection";

async function selectType(type : string):Promise<any>{
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .where({type})
  return result
}
export default selectType;