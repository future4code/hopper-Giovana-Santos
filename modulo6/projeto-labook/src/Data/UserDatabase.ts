import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users"

  async create({ id, name, email, password}: any):Promise<void>{
    await UserDatabase
    .connection(UserDatabase.TABLE_NAME)
    .insert({
      id,
      name,
      email,
      password
   })
  }
}