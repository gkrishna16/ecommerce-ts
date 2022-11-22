import { Request, Response } from "express";

export function getCart(req: Request, res: Response) {
  try {
    res.status(200).json(`this is the cart page.`);
  } catch (error) {
    res.status(500).json(error);
  }
}
