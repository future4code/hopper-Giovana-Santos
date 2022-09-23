import connection from "../dataBase/connection";

async function selectPagination(page: number):Promise<any>{
  const size = 5
  const offset = size * (page - 1)
  const result = await connection("aula48_exercicio")
  .select("id", "name", "email", "type")
  .limit(size)
  .offset(offset)

  return result
}
export default selectPagination;