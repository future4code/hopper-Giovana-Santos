import express, {Request, Response} from "express";
import cors from "cors";
import data from "./data";

let statusCode: number = 400;
const app = express()

app.use(express.json());
app.use(cors())

//Ex 1
app.get("/teste", (req: Request, res: Response) => {
res.status(200).send("API está funcional!");
});

//Ex 3
app.post("/criarProduto", (req: Request, res: Response) => {
  const {name, price} = req.body;

  try{
    if(!name || !price) {
      statusCode = 422;
      throw new Error("O parâmento name ou price, não esta sendo informado.");
    };
    if(typeof name !== "string"){
      statusCode = 422;
      throw new Error("O parametro name tem que ser tipo string");
    }
    if(typeof price !== "number"){
      statusCode = 422;
      throw new Error("O parametro price tem que ser tipo number");
    };
    if(price < 0){
      statusCode = 422;
      throw new Error("O valor do price tem que ser maior que 0");
    }

    const novoProduto = {
      id: Date.now().toString(),
      name,
      price
    };
    data.push(novoProduto);
    res.status(201).send(data);

  }catch (error: any){
    res.status(statusCode).send(error.message);
  };
});

//Ex 4 e 10 desafio
app.get("/retornaProdutos", (req: Request, res: Response) => {
  const search = (req.query.search)?.toString()

  try {
    if(search) {
      const buscaNome = data.filter(produto => produto.name.toLowerCase().includes(search.toLowerCase()))
      if(!buscaNome){
        statusCode = 404
        throw new Error("Produto não foi encontrado!");
      }
      res.status(200).send(buscaNome)
    }else{
      res.status(200).send(data)
    }
  } catch (error: any) {
    res.status(statusCode).send(error.message) 
  }
});

//Ex 5 e 11
app.put("/editaProduto", (req: Request, res: Response) => {
  const id = req.query.id;
  const {price, name}= req.body;

  try {
    if (!id){
      statusCode = 422;
      throw new Error("O id é obrigatorio");
    };
    const buscaId = data.find(produto => produto.id === id);
    if(!buscaId){
      statusCode = 404;
      throw new Error("Produto não foi encontrado");
    };
    if(!price && !name){
      statusCode = 422;
      throw new Error("Parametro price ou name não informado");
    }
    if(price){
      if(typeof price !== 'number'){
        statusCode = 422;
        throw new Error("O preço precisa ser number.");
      };
      if(price <= 0){
        statusCode = 422;
        throw new Error("Parametro price tem que ser um valor maior que 0");
      }
      buscaId.price = price
    }
    if(name){
      if(typeof name !== 'string'){
        statusCode = 422;
        throw new Error("O nome precisa ser string.");
      };
      buscaId.name = name
    }
    
    res.status(200).send(data)

  } catch (error: any) {
    res.status(statusCode).send(error.message);
  };
});

//Ex 6 
app.delete("/deletarProduto", (req: Request, res: Response) => {
  const id = req.query.id

  try {
    if(!id){
      statusCode = 422;
      throw new Error("Obrigatorio passar o parâmetro id");
    }
    const buscaId = data.findIndex(produto => produto.id === id)
    if(buscaId < 0) {
      statusCode = 404;
      throw new Error("Produto não foi encontrado.");
    }
    data.splice(buscaId, 1)
    res.status(200).send(data)

  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
