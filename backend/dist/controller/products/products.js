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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductId = exports.getProdcutWomen = exports.getProdcutMen = exports.addData = exports.getData = void 0;
const db_1 = require("../../db");
function getData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        db_1.db.query("select * from products", (err, data) => {
            if (err)
                return res.status(500).json(err);
            if (data)
                return res.status(200).json(data);
        });
    });
}
exports.getData = getData;
function addData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        db_1.db.query(`insert into products(name, price, imgUrl) values (?,?,?)`, [req.body.name, req.body.price, req.body.imgUrl], (err, data) => {
            console.log(err);
            if (err)
                res.status(500).json(err);
            if (data)
                res.status(200).json(`product has been added.`);
        });
    });
}
exports.addData = addData;
function getProdcutMen(req, res) {
    try {
        console.log(`getProdcutMen function called.`);
        db_1.db.query(`SELECT * FROM products WHERE categories LIKE '%men%';`, (err, data) => {
            if (err)
                return res.status(500).json({ error: err });
            if (data) {
                // received.push(data);
                console.log(data);
                return res.status(200).json(data);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.getProdcutMen = getProdcutMen;
function getProdcutWomen(req, res) {
    try {
        console.log(`getProdcutWomen function called.`);
        db_1.db.query(`SELECT * FROM products WHERE categories LIKE '%women%';`, (err, data) => {
            if (err)
                return res.status(500).json({ error: err });
            if (data) {
                // received.push(data);
                console.log(data);
                return res.status(200).json(data);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.getProdcutWomen = getProdcutWomen;
function getProductId(req, res) {
    try {
        db_1.db.query(`select * from products where id = ?`, [req.params.id], (err, data) => {
            if (err)
                return res.status(500).json({ error: err });
            if (data)
                return res.status(200).json(data);
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
}
exports.getProductId = getProductId;
