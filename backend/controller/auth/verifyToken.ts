// import { CustomRequest } from './authControllers';
import { NextFunction, Request, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

export const SECRET_KEY: Secret | String | any = process.env.secretKey;
// export const SECRET_KEY: Secret = "your-secret-key-here";
export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token: String = authHeader?.split(" ")[1];

      jwt.verify(token, process.env.secretKey, (err, user) => {
        if (err) res.status(403).json(`Token is not valid.`);
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json(`You are not authenticated.`);
    }
  } catch (error) {}
};

export const verifyTokenAndAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that.");
    }
  });
};
