"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../controller/products");
const router = express_1.default.Router();
router.get("/products", products_1.getData);
router.post("/product", products_1.addData);
exports.default = router;
