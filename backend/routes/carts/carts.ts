import express from "express";
const router = express.Router();

import { getCart } from "../../controller/cart/cart";

router.get("/", getCart);

export default router;
