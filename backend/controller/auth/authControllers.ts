import { Request, Response } from "express";
import { db } from "../../db";
import bcrypt from "bcryptjs";
import { QueryOptions } from "mysql2";

export function register(request: Request, response: Response): void {
  const q = `select * from users where email = ? or username = ?`;

  try {
    db.query(q, [request.body.email, request.body.username], (err, data) => {
      if (err) return response.status(500).json(err);
      // if (data.length) {
      return response.status(200).json(`User already exists !`);
      // }
    });
    0;

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

export function login(req: Request, res: Response): void {}

export function getProduct(req: Request, res: Response): void {
  const category = req.query.cat;

  try {
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
}
