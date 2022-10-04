import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { validaIdade } from "./Functions/validaIdade";
import { clientes } from "./data";

const app = express()
app.use(express.json());
app.use(cors())

// Criar conta
app.post("/users", (req: Request, res:Response) => {
  let statusCode = 400
  let {nome, cpf, dataDeNascimento} = req.body

  try {
    if(!nome || !cpf || !dataDeNascimento){
      statusCode = 422
      throw new Error("Os campos (name, cpf e data de nascimento) devem ser preenchidos corretamnente."); 
    }
    if(typeof nome !== "string"){
      statusCode = 422
      throw new Error("O campo nome deve ser do tipo string"); 
    }
    if(cpf.length !== 11){
      statusCode = 422
      throw new Error("Espera-se que o cpf receba 11 números sem caracteres.");
    } else {
      cpf = cpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4")
    }
    // Para saber se o cpf ja existe
    const cpfExistente = clientes.find(cliente => cliente.cpf === cpf)
    if(cpfExistente){
      statusCode = 403
      throw new Error("CPF existente.");
    }
    if(typeof dataDeNascimento !== "string"){
      statusCode = 422
      throw new Error("A data de nascimento precisa ser passada como sting.");
    }
    //validação de idade
    const autorizacao = validaIdade(dataDeNascimento)
    if(autorizacao){
      clientes.push({
        nome,
        cpf,
        dataDeNascimento,
        saldo: 0,
        extrato: []
      })
    } else {
      statusCode = 403
      throw new Error("Para abertura da conta, necessario ser maior de 18 anos.");
    }
    res.status(200).send({message: "Conta criada com sucesso!"})
  } catch (error: any) {
    res.status(statusCode).send({message: error.message})
  }
})
//Pegar todos os usuários existentes
app.get("/users", (req: Request, res:Response) => {
  res.status(200).send(clientes)
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
});
