import { Request, Response } from "express";
import { selecionaUsuarios } from "../queryEndpoints/selecionaUsuarios";

export const buscarUsuarios = async (req: Request, res: Response):Promise<void> => {
  try {
    const resultado = await selecionaUsuarios()

    if(!resultado.length){
      res.statusCode = 404
      throw new Error("Náo há usuários cadastrado");
    }

    res.status(200).send(resultado)
  } catch (error:any) {
    res.send(error.message || error.sqlMessage)
  }
}