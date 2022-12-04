import { Request, Response } from "express";
import { db } from "../../db";
import bcrypt from "bcryptjs";

export function register(request: Request, response: Response): void {
  try {
    db.query(
      `select * from users where email = ? or username = ?`,
      [request.body.email, request.body.username],
      (err, data) => {
        if (err) return response.status(500).json(err);
        // if (data.length) {
        return response.status(200).json(`User already exists !`);
        // }
      }
    );

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.password, salt);

    db.query(
      `insert into users(name, username, email, password) values (?,?,?,?)`,
      [request.body.name, request.body.username, request.body.email, hash],
      (err, data) => {
        if (err) {
          return response.status(500).json(err);
        } else {
          response.setHeader("Content-Type", "application/json");
          return response.status(200).json(`User has been created.`);
        }
      }
    );
  } catch (error) {
    response.status(500).json(error);
  }
}

export function registerdata(req: Request, res: Response): void {
  db.query(`select * from users`, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data) return res.status(200).json(data);
  });
}

export async function login(req: Request, res: Response) {
  try {
    db.query(
      `select * from products where username = ?`,
      [req.body.username],
      async (err, data) => {
        if (err) return res.status(500).json(err);
        // @ts-ignore
        if (data.length === 0) {
          // console.log(`User does not exist.`);
          return res.status(404).json("User does not exist.");
        } else {
          // @ts-ignore
          const hasedPassword = data[0].password;
          // get the hashed password from results
          if (await bcrypt.compare(req.body.password, hasedPassword)) {
            res.status(200).json(`${req.body.username} Login successful.`);
          } else {
            res.send(404).json(`Password incorrect.`);
          }
        }
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export function getProduct(req: Request, res: Response): void {
  const category = req.query.cat;
  try {
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
}
