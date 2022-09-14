import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getAllUsers } from "../endpoints/getAllUsers";
import { getTypes } from "../endpoints/getTypes";
import { getOrder } from "../endpoints/getOrder";
import { getPagination } from "../endpoints/getPagination";
import { getAllFeaturesFilter } from "../endpoints/getAllFeaturesFilter";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", getAllUsers)
app.get("/users/:type", getTypes)
app.get("/order/users", getOrder)
app.get("/page/users", getPagination)
app.get("/all/users", getAllFeaturesFilter)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});

export default app;
