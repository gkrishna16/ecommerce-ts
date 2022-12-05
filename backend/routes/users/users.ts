import bcrypt from "bcryptjs";
import { verifyTokenAndAuthorization } from "./../../controller/auth/verifyToken";
import express, { Request, Response } from "express";
import { verifyToken } from "../../controller/auth/verifyToken";
import { getAllUsers } from "../../controller/users/users";

const router = express.Router();

router.get("/users", getAllUsers);
router.put(
  "/:id",
  verifyTokenAndAuthorization,
  async (req: Request, res: Response) => {
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, salt);
    }

    try {
      // const updatedUser = await
    } catch (error) {}
  }
);

export default router;
