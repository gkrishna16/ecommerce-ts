import express from "express";
import {
  registerdata,
  register,
  getProduct,
} from "../controller/authControllers";
const router = express.Router();

router.get("/registerdata", registerdata);
router.post("/register", register);
router.get(`/getproduct`, getProduct);

export default router;
