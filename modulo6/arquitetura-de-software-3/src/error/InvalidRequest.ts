import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError {
  constructor(){
    super(400, "Todas as requisicoes devem estar preenchidas obrigatoriamente")
  }
}