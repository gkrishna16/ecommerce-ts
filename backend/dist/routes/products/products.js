"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../../controller/products/products");
const router = express_1.default.Router();
router.get("/", products_1.getData);
router.post("/add", products_1.addData);
router.get(`/men`, products_1.getProdcutMen);
router.get(`/women`, products_1.getProdcutWomen);
exports.default = router;
