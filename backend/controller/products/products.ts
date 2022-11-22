import { db } from "../../db";
import express, { Express, Request, Response, NextFunction } from "express";

export async function getData(req: Request, res: Response) {
  db.query("select * from products", (err, data) => {
    if (err) res.status(500).json(err);
    if (data) res.status(200).json(data);
  });
}

export async function addData(req: Request, res: Response) {
  const q = "insert into products(`name`, `price`, `imgUrl`) values (?, ?, ?)";

  const values = [req.body.name, req.body.price, req.body.imgUrl];
  db.query(q, [values], (err, data) => {
    if (err) res.status(500).json(err);
    if (data) res.status(200).json(`product has been added.`);
  });
}

export function getProdcutMen(req: Request, res: Response): void {
  try {
    console.log(`getProdcutMen function called.`);
    // let received: object[] = [];

    // let p = `SELECT id, docs FROM example WHERE docs LIKE '%cold%';`;
    // let q = `SELECT * FROM products WHERE categories LIKE %?%;`;

    db.query(
      `SELECT * FROM products WHERE categories LIKE '%men%';`,
      (err, data) => {
        if (err) return res.status(500).json({ error: err });
        if (data) {
          // received.push(data);
          console.log(data);
          return res.status(200).json(data);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export function getProdcutWomen(req: Request, res: Response): void {
  try {
    console.log(`getProdcutWomen function called.`);
    // let received: object[] = [];

    // let p = `SELECT id, docs FROM example WHERE docs LIKE '%cold%';`;
    // let q = `SELECT * FROM products WHERE categories LIKE %?%;`;

    db.query(
      `SELECT * FROM products WHERE categories LIKE '%women%';`,
      (err, data) => {
        if (err) return res.status(500).json({ error: err });
        if (data) {
          // received.push(data);
          console.log(data);
          return res.status(200).json(data);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
