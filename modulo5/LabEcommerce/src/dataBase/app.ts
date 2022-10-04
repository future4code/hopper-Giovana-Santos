import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { criarUsuario } from "../endpoints/criarUsuario";
import { buscarUsuarios } from "../endpoints/buscarUsuarios";
import { cadastraProdutos } from "../endpoints/cadastraProdutos";
import { buscarProdutos } from "../endpoints/buscarProdutos";
import { registroDeCompras } from "../endpoints/registroDeCompras";
import { buscarComprasDeUsuario } from "../endpoints/buscarComprasDeUsuario";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", criarUsuario),
app.get("/users", buscarUsuarios),
app.post("/products", cadastraProdutos),
app.get("/products", buscarProdutos),
app.post("/purchases", registroDeCompras),
app.get("/users/:user_id/purchases", buscarComprasDeUsuario)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

export default app;