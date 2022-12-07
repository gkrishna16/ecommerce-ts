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
const db_1 = require("./../../db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const verifyToken_1 = require("./../../controller/auth/verifyToken");
const express_1 = __importDefault(require("express"));
const users_1 = require("../../controller/users/users");
const router = express_1.default.Router();
router.get("/users", users_1.getAllUsers);
// GET USER BY ID
router.get(`/:id`, users_1.getUserById);
// UPDATE USER
router.put("/:id", verifyToken_1.verifyTokenAndAuthorization, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.password) {
        const salt = bcryptjs_1.default.genSaltSync(10);
        req.body.password = bcryptjs_1.default.hashSync(req.body.password, salt);
    }
    try {
        db_1.db.query(`update users set username = ?, name = ?, email = ?, password = ?, isAdmin = false where id = ?`, [
            req.body.username,
            req.body.name,
            req.body.email,
            req.body.password,
            // req.body.isAdmin,
            req.params.id,
        ], (err, data) => {
            // @ts-ignore
            if (err)
                return res.status(401).json(err);
            // @ts-ignore
            if (data)
                return res.status(200).json(`user updated.`);
        });
    }
    catch (error) { }
}));
// DELETE
router.delete(`/:id`, verifyToken_1.verifyTokenAndAuthorization, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        db_1.db.query(`delete from users where id = ?`, [req.params.id], (err, data) => {
            if (err)
                return res.status(401).json(err);
            if (data)
                return res.status(200).json(`user has been deleted.`);
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
exports.default = router;
