import { db } from "../../db";
import { Request, Response } from "express";

export async function getData(req: Request, res: Response) {
  db.query("select * from products", (err, data) => {
    if (err) return res.status(500).json(err);
    if (data) return res.status(200).json(data);
  });
}

export async function addData(req: Request, res: Response) {
  db.query(
    `insert into products(title, price, img, categories, size, color) values (?,?,?,?,?,?)`,
    [
      req.body.title,
      req.body.price,
      req.body.img,
      [JSON.stringify(req.body.categories)],
      req.body.size,
      req.body.color,
    ],
    (err, data) => {
      console.log(err);
      if (err) res.status(500).json(err);
      if (data) res.status(200).json(`product has been added.`);
    }
  );
}

export function getProdcutMen(req: Request, res: Response): void {
  try {
    console.log(`getProdcutMen function called.`);

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

export function getProductId(req: Request, res: Response): void {
  try {
    db.query(
      `select * from products where id = ?`,
      [req.params.id],
      (err, data) => {
        if (err) return res.status(500).json({ error: err });
        if (data) return res.status(200).json(data);
      }
    );
  } catch (error) {
    res.status(500).json({ error });
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
