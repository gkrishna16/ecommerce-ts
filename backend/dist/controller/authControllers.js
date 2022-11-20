"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.login = exports.registerdata = exports.register = void 0;
const db_1 = require("../db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function register(request, response) {
    const q = `select * from users where email = ? or username = ?`;
    try {
        db_1.db.query(q, [request.body.email, request.body.username], (err, data) => {
            if (err)
                return response.status(500).json(err);
            if (data.length) {
                return response.status(200).json(`User already exists !`);
            }
        });
        0;
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
