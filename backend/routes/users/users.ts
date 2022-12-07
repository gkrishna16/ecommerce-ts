import { db } from "./../../db";
import bcrypt from "bcryptjs";
import { verifyTokenAndAuthorization } from "./../../controller/auth/verifyToken";
import express, { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../controller/auth/verifyToken";
import { getAllUsers, getUserById } from "../../controller/users/users";

const router = express.Router();

router.get("/users", getAllUsers);

// GET USER BY ID
router.get(`/:id`, getUserById);

// UPDATE USER
router.put(
  "/:id",
  verifyTokenAndAuthorization,
  async (req: Request, res: Response) => {
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, salt);
    }

    try {
      db.query(
        `update users set username = ?, name = ?, email = ?, password = ?, isAdmin = false where id = ?`,
        [
          req.body.username,
          req.body.name,
          req.body.email,
          req.body.password,
          // req.body.isAdmin,
          req.params.id,
        ],
        (err, data) => {
          // @ts-ignore

          if (err) return res.status(401).json(err);
          // @ts-ignore
          if (data) return res.status(200).json(`user updated.`);
        }
      );
    } catch (error) {}
  }
);

// DELETE
router.delete(
  `/:id`,
  verifyTokenAndAuthorization,
  async (req: Request, res: Response) => {
    try {
      db.query(
        `delete from users where id = ?`,
        [req.params.id],
        (err, data) => {
          if (err) return res.status(401).json(err);
          if (data) return res.status(200).json(`user has been deleted.`);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

export default router;
