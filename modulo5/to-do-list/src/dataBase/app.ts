import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

//1- Criar Usuario
app.post("/user", async(req: Request, res: Response) => {
  let statusCode = 400
    try {
      const {name, nickname, email} = req.body;
      if(!name){
        statusCode = 422
        throw new Error("O campo name deve ser preenchido obrigatoriamente!");
      }
      if(!nickname){
        statusCode = 422
        throw new Error("O campo nickname deve ser preenchido obrigatoriamente!");
      }
      if(!email){
        statusCode = 422
        throw new Error("O campo email devem ser preenchido obrigatoriamente!");
      }
      await connection("TodoListUser").insert({"id": Date.now(), name, nickname, email})
      res.status(201).send({message:"Usuario criado com sucesso."})
  } catch (error: any) {
    res.status(statusCode).send({message: error.message})
  }
  });
  
  // 2 - Pegar usuario pelo id
  app.get("/user/:id", async(req: Request, res: Response) => {
    let statusCode = 400
    try {
      const id = req.params.id
      const user = await connection("TodoListUser")
      .select("id", "nickname")
      .where({id})

      if(!user.length){
        statusCode = 404
        throw new Error("Usuário não encontrado.");
      }

      res.status(200).send(user)
    } catch (error: any) {
      res.status(statusCode).send({message: error.message})
    }
  });

  // 3 - Editar Usuario
  app.put("/user/edit/:id", async (req:Request, res:Response) => {
    let statusCode = 400
    try {
      const id = req.params.id
      const {name, nickname} = req.body

      const user = await connection("TodoListUser")
      .select().where({id})

      if(!user.length){
        statusCode = 404
        throw new Error("Usuario não encontrado.");
      }
      if(!name && !nickname){
        statusCode
        throw new Error("Deve ser passado o parametro a qual queira fazer a alteracao, seja name ou nickname.");
      }
      if(name){
        await connection("TodoListUser")
        .update({name})
        .where({id})
      }
      if(nickname){
        await connection("TodoListUser")
        .update({nickname})
        .where({id})
      }
      res.status(200).send({message: "Dados de usuario alterado com sucesso!"})
    } catch (error: any) {
      res.status(statusCode).send({message: error.message})
    }
  });

  // 4 - Criar tarefa
  app.post("/task", async (req:Request, res:Response) => {
    let statusCode = 400
    try {
      const {title, description, limitDate, creatorUserId} = req.body
      if(!title || !description || !limitDate || !creatorUserId){
        statusCode = 422
        throw new Error("Todos os campos devem ser preenchidos obrigatoriamente!");
      }
      await connection("TodoListTask")
      .insert({
        "id": Date.now(),
        title,
        description,
        "limit_date":limitDate.split("/").reverse().join("-"),
        "creator_user_id":creatorUserId
      })
      res.status(201).send({message:"Tarefa criada com sucesso."})
    } catch (error: any) {
      res.status(statusCode).send({message: error.message})
    }
  });

  // 5 - Pegar tarefa pelo id
  app.get("/task/:id",async (req:Request, res:Response) => {
    let statusCode = 400
    try {
      const id = req.params.id
      
      if(!id){
        statusCode = 422
        throw new Error("Precisa do id para identificar a tarefa ao qual deseja consultar");
      }
      
      const task = await connection
      .select()
      .from("TodoListTask")
      .innerJoin("TodoListUser","TodoListTask.creator_user_id","TodoListUser.id")
      .where("TodoListTask.id", id)

      if(!task.length){
        statusCode = 404
        throw new Error("Tarefa não encontrada");
      }
      res.status(200).send(task)
    } catch (error: any) {
      res.status(statusCode).send({message: error.message})
    }
  });

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app