"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.login = exports.registerdata = exports.register = void 0;
const db_1 = require("../../db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import { QueryOptions } from "mysql2";
function register(request, response) {
    try {
        db_1.db.query(`select * from users where email = ? or username = ?`, [request.body.email, request.body.username], (err, data) => {
            if (err)
                return response.status(500).json(err);
            // if (data.length) {
            return response.status(200).json(`User already exists !`);
            // }
        });
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hash = bcryptjs_1.default.hashSync(request.body.password, salt);
        db_1.db.query(`insert into users(name, username, email, password) values (?,?,?,?)`, [request.body.name, request.body.username, request.body.email, hash], (err, data) => {
            if (err) {
                return response.status(500).json(err);
            }
            else {
                return response.status(200).json(`User has been created.`);
            }
        });
    }
    catch (error) {
        response.status(500).json(error);
    }
}
exports.register = register;
function registerdata(req, res) {
    db_1.db.query(`select * from users`, (err, data) => {
        if (err)
            return res.status(500).json(err);
        if (data)
            return res.status(200).json(data);
    });
}
exports.registerdata = registerdata;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = db_1.db.query(
            // `select * from products where username = ?`,
            `select * from products`, [req.body.username], (err, data) => {
                if (err)
                    return err;
                if (data)
                    return data;
            });
            console.log(user);
            res.send(200).json(user);
        }
        catch (error) { }
    });
}
exports.login = login;
function getProduct(req, res) {
    const category = req.query.cat;
    try {
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json(error);
    }
}
exports.getProduct = getProduct;
