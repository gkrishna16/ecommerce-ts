import express from "express";
const router = express.Router();

import {
  registerdata,
  register,
  getProduct,
} from "../../controller/auth/authControllers";

router.get("/registerdata", registerdata);
router.post("/register", register);
router.get(`/getproduct`, getProduct);

export default router;
