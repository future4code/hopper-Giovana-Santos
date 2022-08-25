import express, {Request, Response} from "express";
import cors from "cors";
import users, {UserType} from "./data"

const app = express()

app.use(express.json());
app.use(cors())

// Ex 1 
//http://localhost:3003/users

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
});

//a. Qual método HTTP você deve utilizar para isso? 
//R: GET metodo para buscar todos os usuários

//b. Como você indicaria a entidade que está sendo manipulada?
//R: indicaria o "/users" porque semelha a usuarios.

//Ex 2 
app.get("/users/:type", (req: Request, res:Response) => {
    let statusCode: number = 400;
    const type = (req.params.type as string).toUpperCase()
    try {

        if(!type){
            statusCode = 422
            throw new Error("Precisa passar o parametro type busca");
            
        }
        if(type !== UserType.ADMIN && type !== UserType.NORMAL){
            statusCode = 422
            throw new Error("O type precisa ser Admin ou Normal")
        }
        const user = users.filter((usuario) => {
            return usuario.type === type
        })
        if(!user.length){
            statusCode = 404
            throw new Error("Usuario não encontrado.")
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
});

//a. Como você passou os parâmetros de type para a requisição? Por quê?
//R: PathParams, em caso de continuação de caminho, como no exemplo de pedidos de um usuário específico

//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//R: Sim, atraves de validação onde refere o type que deve ser passado.

//EX 3
//http://localhost:3003/user/name
app.get("/user/name", (req: Request, res:Response) => {
    let statusCode: number = 400
    const name = (req.query.name as string).toLowerCase() 

    try{
        if(!name){
            statusCode = 422
            throw new Error("O parametro name precisa ser passado.");
        }
        const nome = users.filter((user) => {
            return (user.name).toLowerCase().includes(name)
            
        })
        if(!nome.length){
            statusCode = 404
            throw new Error("Usuario não encontrado.")
        }
        res.status(200).send(nome)

    }catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
});

//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//R: QueryParams, em caso de busca dentro de um mesmo conjunto, como em uma busca por nome

//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
//R: Validação feita no exercicio

//Ex 4 
app.post("/users/:id", (req: Request, res:Response) => {
    let statusCode: number = 400
    const id = Number(req.params.id)
    const phone = req.body.phone

    try {
       if(!id || !phone){
        statusCode = 422
        throw new Error("Parametros id e phone precisam ser passados.");
       } 
       const buscaUsuario = users.find(user => user.id === id)
       if(!buscaUsuario){
        statusCode = 404
        throw new Error("Usuario não foi encontrado.");
       }
       users.forEach(user => {
        if(user.id === id){
            return user.phone = phone
        }
       })
       res.status(200).send(users)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
});

//a. Mude o método do endpoint para `PUT`. O que mudou?
//R: Mudou apenas o metodo.
//b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//R: Sim, ele é um metodo de edição de recursos

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})