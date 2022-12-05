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
        
        res.status(200).json({ data: data[0], msg: "users have been found." });
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
