import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword, RequiredToken } from "../error/customError";
import {
  UserInputDTO,
  user,
} from "../model/user";
import { GenerateId } from "../services/GenerateId";
import { GenerateToken } from "../services/GenerateToken";

export class UserBusiness {
  public signup = async (input: UserInputDTO) :Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const id: string = GenerateId()

      const user: user = {
        id,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const generateToken = new GenerateToken();
      const token = generateToken.generate({id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: UserInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }
      
      const userDatabase = new UserDatabase();
      const user: user = await userDatabase.getUser(email);

      if(user.password !== password){
        throw new InvalidPassword();
      }

      const {id} = user;
      const generateToken = new GenerateToken();
      const token = generateToken.generate({id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public getuser = async (token: string) => {
    try {
      if(!token){
        throw new RequiredToken()
      }
      const generateToken = new GenerateToken();
      const tokenInfo = generateToken.compare(token)

      const userDatabase = new UserDatabase();
      const userInfo = await userDatabase.getUserById(tokenInfo.id);

      return userInfo
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }
}
