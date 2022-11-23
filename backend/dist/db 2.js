"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// const mysql = require("mysql2");
const mysql2_1 = __importDefault(require("mysql2"));
exports.db = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql8459",
    database: "cart_ecommerce",
});
exports.db.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else
        console.log("Database Connected");
});
// console.log(db.query());
