import { db } from "../db";
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
