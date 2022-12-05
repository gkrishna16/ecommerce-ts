// import { dotenv } from "ts-dotenv";
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import products from "./routes/products/products";
import auth from "./routes/auth/authRoutes";
import carts from "./routes/carts/carts";
import users from "./routes/users/users";
import dotenv from "dotenv";
dotenv.config();
const app: Express = express();
const port = 5002;

app.use(cors());
app.use(express.json());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//
app.use("/api/products", products);
app.use(`/api/users`, users);
app.use(`/api/cart`, carts);
app.use(`/api/auth`, auth);

app.use(`/`, (req: Request, res: Response) => {
  res.send("Homepage of the api.");
});

app.listen(port, () => {
  console.log(`The server is running on ${port}.`);
});
