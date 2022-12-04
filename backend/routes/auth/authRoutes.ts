import express from "express";
const router = express.Router();
import {
  registerdata,
  register,
  getProduct,
  login,
} from "../../controller/auth/authControllers";

router.get("/registerdata", registerdata);
router.post("/register", register);
router.get(`/getproduct`, getProduct);
router.post(`/login`, login);

export default router;
