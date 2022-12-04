"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("./routes/products/products"));
const authRoutes_1 = __importDefault(require("./routes/auth/authRoutes"));
const carts_1 = __importDefault(require("./routes/carts/carts"));
const app = (0, express_1.default)();
const port = 5002;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
app.use("/api/products", products_1.default);
app.use(`/api/users`, authRoutes_1.default);
app.use(`/api/cart`, carts_1.default);
app.use(`/`, (req, res) => {
    res.send("Homepage of the api.");
});
app.listen(port, () => {
    console.log(`The server is running on ${port}.`);
});
