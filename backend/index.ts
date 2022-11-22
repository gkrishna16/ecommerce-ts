import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import products from "./routes/products/products";
import users from "./routes/auth/authRoutes";
import carts from "./routes/carts/carts";
const app: Express = express();
const port = 5002;

app.use(cors());
app.use(express.json());

//
app.use("/api/products", products);
app.use(`/api/users`, users);
app.use(`/api/cart`, carts);

app.use(`/`, (req: Request, res: Response) => {
  res.send("Homepage of the api.");
});

app.listen(port, () => {
  console.log(`The server is running on ${port}.`);
});

// app.get("/", (req: Request, res: Response) => {
//   res.send(`Hello from express + TS !!!`);
// });

// app.get("/hi", (req: Request, res: Response) => {
//   res.send(`Hi from hi pages.`);
// });

// app.get("/yo", (req: Request, res: Response) => {
//   res.send(`Yo from yo pages.`);
// });

// app.get("/bye", (req: Request, res: Response) => {
//   res.send(`Bye from bye pages.`);
// });
