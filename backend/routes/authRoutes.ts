import express from "express";
import { registerdata, register } from "../controller/authControllers";
const router = express.Router();

router.get("/registerdata", registerdata);
router.post("/register", register);

export default router;
