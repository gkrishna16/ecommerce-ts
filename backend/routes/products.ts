import express, { Express, Request, Response, NextFunction } from "express";

import { addData, getData } from "../controller/products";
const router = express.Router();

router.get("/products", getData);
router.post("/product", addData);

export default router;
