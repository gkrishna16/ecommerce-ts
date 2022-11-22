"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("./routes/products"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
const port = 5002;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//
app.use("/api/products", products_1.default);
app.use(`/api/users`, authRoutes_1.default);
app.use(`/`, (req, res) => {
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
