import { Request, Response } from "express";
import { selecionaProdutos } from "../queryEndpoints/selecionaProdutos";

export const buscarProdutos = async (req: Request, res: Response):Promise<void> => {
  try {
    const resultado = await selecionaProdutos("%")

    if(!resultado.length){
      res.statusCode = 404
      throw new Error("Náo ha produtos cadastrado");
    }
    
    res.status(200).send(resultado)
  } catch (error:any) {
    res.send(error.message || error.sqlMessage)
  }
}