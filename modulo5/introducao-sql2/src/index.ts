import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

//Ex 1 
app.get("/usuarios", async(req:Request, res:Response) => {
  let statusCode = 400
  try {
    const busca = req.query.busca
    if(busca){
      const usuario = await connection("Funcionarios")
      .select()
      .where({"nome":busca})
      if (!usuario.length) {
        statusCode = 404
        throw new Error("Funcionário não foi encontrado.");
      }
      res.status(200).send(usuario)
    } else {
      const usuarios = await connection("Funcionarios").select()
      res.status(200).send(usuarios)
    }
 } catch (error: any) {
    res.status(statusCode).send({message:error.message})
 }
});

//Ex 2 
app.post("/criarUsuario", async(req:Request, res:Response) => {
  let statusCode = 400
  try {
    const {nome, email} = req.body
    if(!nome || !email){
      statusCode = 422
      throw new Error("Parâmetro nome e email são obrigatorios.");
    }
    if(typeof nome !== 'string' || typeof email !== 'string'){
      statusCode = 422
      throw new Error("O nome e email devem ser do tipo string.");
    }
    if(nome.length < 4) {
      statusCode = 422
      throw new Error("O nome do usuário deve ter ao menos 4 caracteres.")
    }
    const regex = /\S+@\S+.\S+/
    if(!regex.test(email)){
      statusCode = 422
      throw new Error("O email deve possuir o caractere @lbn.com.");
    }
    const usuario = await connection("Funcionarios")
    .select("email")
    .where({email})
    if(usuario.length){
      statusCode = 409
      throw new Error("Email ja existente.")
    }
    await connection("Funcionarios").insert({"id": Date.now(), nome, email})
    res.status(201).send({message:"Usuario criado com sucesso."})
  } catch (error:any) {
    res.status(statusCode).send({message:error.message})
  }
});
  //Ex 3
  app.put("/alteraDados/:id", async(req:Request, res:Response) => {
    let statusCode = 400
    try {
      const {id} = req.params
      const {email} = req.body
      const usuarios = async(select: string, where: any) => {
        const usuario = await connection("Funcionarios")
        .select(select)
        .where(where)
        return usuario
      }
      const buscarId = await usuarios("id", {id})
      if(!buscarId.length){
        statusCode = 404
        throw new Error("Funcionário não encontrado.")
      }
      if(typeof email !== 'string'){
        statusCode = 422
        throw new Error("O email deve ser do tipo string.");
      }
      const regex = /\S+@\S+.\S+/
      if(!regex.test(email)){
        statusCode = 422
        throw new Error("O email deve possuir o caractere email@email.com.");
      }
      const buscarEmail = await usuarios("email", {email})
      if(buscarEmail.length){
        statusCode = 409
        throw new Error("Email ja existente.");
      }
      await connection("Funcionarios")
      .update({email})
      .where({id})
      res.status(200).send({message: "Email atualizado com sucesso!"})
    } catch (error: any) {
      res.status(statusCode).send({message:error.message})
    }
  });

  //Ex 4 
  app.delete("/ExcluirFuncionario/:id", async(req:Request, res:Response) => {
    let statusCode = 400
    try {
      const {id} = req.params;
      const usuario = await connection("Funcionarios")
      .select()
      .where({id})
      if(!usuario.length){
        statusCode = 404
        throw new Error("Funcionário não foi encontrado.");
      }
      await connection("Funcionarios")
      .delete()
      .where({id})
      res.status(200).send({message: "Funcionario deletado com sucesso!"})
    } catch (error: any) {
      res.status(statusCode).send({message:error.message})
    }
  });





app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});