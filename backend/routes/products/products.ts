import express from "express";

import {
  addData,
  getData,
  getProdcutMen,
  getProdcutWomen,
} from "../../controller/products/products";
const router = express.Router();

router.get("/", getData);
router.post("/add", addData);
router.get(`/men`, getProdcutMen);
router.get(`/women`, getProdcutWomen);

export default router;
