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
exports.getUserById = exports.getAllUsers = void 0;
const db_1 = require("../../db");
function getAllUsers(req, res
//   next: Function
) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            db_1.db.query(`select * from users`, (err, data) => {
                if (err) {
                    res.status(404).json(err);
                }
                else {
                    // @ts-ignore
                    res.status(200).json(data);
                }
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.getAllUsers = getAllUsers;
// GET USER BY ID
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            db_1.db.query(`select * from users where id = ?`, [req.params.id], (err, data) => {
                if (err)
                    return res.status(401).json(err);
                if (data) {
                    // @ts-ignore
                    return res.status(200).json(data[0]);
                }
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.getUserById = getUserById;
