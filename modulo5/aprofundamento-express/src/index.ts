import express, {Request, Response} from "express";
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors())

//Ex 1

app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//Ex 2

type Afazeres = { 
  "userId": string,
  "id": string,
  "title": string,
  "completed": string
}

//Ex 3 

const afazeres: Afazeres[] = [
  {
   "userId": "2001",
   "id": "1",
   "title": "Lavar banheiro",
   "completed": 'true'
  },
  {
   "userId": "2002",
   "id": "1",
   "title": "Dar carinho no gato",
   "completed": 'true'
  },
  {
    "userId": "2003",
    "id": "1",
    "title": "Assitir kwai",
    "completed": 'false'
  }

]

//Ex 4

app.get("/afazeres", (req:Request, res:Response) => {          
  const afazeresEmAndamento = req.query.choice?.toString()
  if(!afazeresEmAndamento){
    res.send("Choice é obrigatorio! (true ou false)")
  }
  const resposta: Afazeres[] = afazeres.filter(afazer => afazer.completed === afazeresEmAndamento)
  res.send(resposta)
})

// Ex 5

app.post("/afazeres", (req:Request, res:Response) => {
  const {userId, id, title, completed} = req.body
  if(!userId || !id || !title || !completed){
    res.status(400).send("Esta faltando um argumento a ser preenchido no body!")
  }
  afazeres.push({ userId, id, title, completed})
  res.status(200).send(afazeres) 
})

// Ex 6

app.put("/afazeres/editar", (req: Request, res: Response) => {
  const userId = req.query.userId
  const id = req.query.id
  const status = req.body.status

  if(!userId || !id) {
    res.status(400).send("Querys não preenchido!")
  }
  if(!status) {
    res.status(400).send("Body precisa ser preenchido")
  }
  afazeres.forEach(afazer => {
    if(afazer.userId === userId){
      if(afazer.id === id){
        afazer.completed = status
      }
    }
  })
  res.status(200).send(afazeres)
})

//Ex 7 

app.delete("/afazeres",  (req: Request, res: Response) => {
  const userId = req.query.userId
  const id = req.query.id

  if(!userId || !id) {
    res.status(400).send("Querys não preenchido!")
  }
  afazeres.filter((afazer, index) => {
    if(afazer.userId === userId){
      if(afazer.id === id){
        afazeres.splice(index, 1)
      }
      return afazer
    }
  })
  res.status(200).send(afazeres)
})

//Ex 8

app.get("/afazeres/user/:userId", (req: Request, res: Response) => {
  const userId = req.params.userId
  
  if(!userId){
    res.status(400).send("obrigatorio ser passado o parametro!")
  }
  const afazaresUsuario = afazeres.filter(afazer => afazer.userId === userId)
  res.status(200).send(afazaresUsuario)
})

//Ex 9






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
