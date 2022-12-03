import { Request, Response } from "express";
import { db } from "../../db";
import bcrypt from "bcryptjs";
// import { QueryOptions } from "mysql2";

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
    const user = db.query(
      // `select * from products where username = ?`,
      `select * from products`,
      [req.body.username],
      (err, data) => {
        if (err) return err;
        if (data) return data;
      }
    );
    console.log(user);
    res.send(200).json(user);
  } catch (error) {}
}

export function getProduct(req: Request, res: Response): void {
  const category = req.query.cat;
  try {
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
}
