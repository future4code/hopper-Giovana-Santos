import { Request, Response } from "express";
import { selecionaComprasUsuario } from "../queryEndpoints/selecionaComprasUsuario";

export const buscarComprasDeUsuario = async (req: Request, res: Response):Promise<void> => {
  try {
    const user_id = req.params.user_id as string

    const resultado = await selecionaComprasUsuario(user_id)
    
    if(!resultado.length){
      res.statusCode = 404
      throw new Error("As compras do usuário não foram encontradas.");
    }
    res.status(200).send(resultado)
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}