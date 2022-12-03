"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authControllers_1 = require("../../controller/auth/authControllers");
router.get("/registerdata", authControllers_1.registerdata);
router.post("/register", authControllers_1.register);
router.get(`/getproduct`, authControllers_1.getProduct);
router.get(`/login`, authControllers_1.login);
exports.default = router;
