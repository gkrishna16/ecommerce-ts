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
exports.addData = exports.getData = void 0;
const db_1 = require("../db");
function getData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        db_1.db.query("select * from products", (err, data) => {
            if (err)
                res.status(500).json(err);
            if (data)
                res.status(200).json(data);
        });
    });
}
exports.getData = getData;
function addData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const q = "insert into products(`name`, `price`, `imgUrl`) values (?, ?, ?)";
        const values = [req.body.name, req.body.price, req.body.imgUrl];
        db_1.db.query(q, [values], (err, data) => {
            if (err)
                res.status(500).json(err);
            if (data)
                res.status(200).json(`product has been added.`);
        });
    });
}
exports.addData = addData;
