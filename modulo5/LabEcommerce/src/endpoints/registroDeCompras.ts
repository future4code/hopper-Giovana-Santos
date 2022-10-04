import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { selecionaProdutos } from "../queryEndpoints/selecionaProdutos";

export const registroDeCompras = async(req: Request, res: Response):Promise<void> => {
  try {
    const {user_id, product_id, quantity} = req.body
    if(!user_id || !product_id || !quantity){
      res.statusCode = 422
      throw new Error("Os campos devem ser todos preenchidos corretamente!")
    }

    if(typeof user_id !== "string" || typeof product_id !== "string"){
      res.statusCode = 422
      throw new Error("O campo user_id e product_id devem ser do tipo string.");
    }

    if(typeof quantity !== "number"){
      res.statusCode = 422
      throw new Error("O campo quantity deve ser do tipo number");
    }

    const produto = await selecionaProdutos(product_id)
    const total_price = Number(produto.map((mercadoria: any) => mercadoria.price * quantity).join(""))

    await connection("labecommerce_purchases")
    .insert({id: Date.now(), user_id, product_id, quantity, total_price})

    res.status(200).send("Compra efetuada com sucesso!")
  } catch (error:any) {
    res.send(error.message || error.sqlMessage)
  }
}