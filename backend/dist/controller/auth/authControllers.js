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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerdata = exports.register = void 0;
const db_1 = require("../../db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
        db_1.db.query(`insert into users(name, username, email, password, isAdmin) values (?,?,?,?,false)`, [
            request.body.name,
            request.body.username,
            request.body.email,
            hash,
            request.body.isAdmin,
        ], (err, data) => {
            if (err) {
                return response.status(500).json(err);
            }
            else {
                response.setHeader("Content-Type", "application/json");
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
            // console.log(typeof process.env.secretKey);
            db_1.db.query(`select * from users where username = ?;`, [req.body.username], (err, data) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    return res.status(500).json(err);
                // @ts-ignore
                if (data.length === 0) {
                    // console.log(`User does not exist.`);
                    return res.status(404).json({ msg: "User does not exist." });
                }
                else {
                    // @ts-ignore
                    const hasedPassword = data[0].password;
                    // get the hashed password from results
                    if (yield bcryptjs_1.default.compare(req.body.password, hasedPassword)) {
                        // @ts-ignore
                        const accessToken = jsonwebtoken_1.default.sign({
                            // @ts-ignore
                            id: data[0].id,
                            // @ts-ignore
                            isAdmin: data[0].isAdmin,
                        }, 
                        // @ts-ignore
                        process.env.secretKey, { expiresIn: "3d" });
                        // @ts-ignore
                        const _a = data[0], { password } = _a, others = __rest(_a, ["password"]);
                        // @ts-ignore
                        res.status(200).json(Object.assign(Object.assign({}, others), { 
                            // @ts-ignore
                            msg: `${data[0].username} Login successful.`, accessToken }));
                    }
                    else {
                        res.send(404).json(`Password incorrect.`);
                    }
                }
            }));
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.login = login;
