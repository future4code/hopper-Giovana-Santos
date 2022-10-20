import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError"
import { InvalidEmail } from "../error/InvalidEmail"
import { InvalidRequest } from "../error/invalidRequest"
import { ShortName } from "../error/ShortName"
import { User } from "../model/User"
import { UserInputDTO } from "../model/UserDTO"
import { generateId } from "../services/generateId"

export class UserBusiness {
  async create(input : UserInputDTO):Promise<void> {
    try {
      const { email, name, password } = input
      if (!email || !name || !password) {
        throw new InvalidRequest()
      }
      
      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      if (name.length < 3) {
        throw new ShortName()
      }

      const id: string = generateId()
  
      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        email,
        name,
        password
      })

    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage);
    }
  }
  async get():Promise<User[]> {
    const userDatabase = new UserDatabase()
    return await userDatabase.get()
  }
}
