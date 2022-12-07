import { db } from "../../db";
import { Request, Response } from "express";

export async function getAllUsers(
  req: Request,
  res: Response
  //   next: Function
) {
  try {
    db.query(`select * from users`, (err, data) => {
      if (err) {
        res.status(404).json(err);
      } else {
        // @ts-ignore
        res.status(200).json(data);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// GET USER BY ID
export async function getUserById(req: Request, res: Response) {
  try {
    db.query(
      `select * from users where id = ?`,
      [req.params.id],
      (err, data) => {
        if (err) return res.status(401).json(err);
        if (data) {
          // @ts-ignore
          return res.status(200).json(data[0]);
        }
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
}
