"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const stripe_1 = __importDefault(require("stripe"));
// @ts-ignore
const stripePayment = new stripe_1.default(process.env.STRIPE_KEY, {
    apiVersion: "2022-11-15",
});
router.post(`/payment`, (req, res) => {
    // try {
    stripePayment.charges.create({
        source: req.body.token,
        amount: req.body.amount,
        currency: "usd",
    }, 
    // @ts-ignore
    (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        }
        else {
            res.status(200).json(stripeRes);
        }
    });
    // } catch (error) {
    console.log(`from here `);
    // @ts-ignore
    res.status(500).json({ error: error.message });
    // }
});
exports.default = router;
// import Stripe from "stripe";
// @ts-ignore
// const stripePay = new Stripe(process.env.STRIPE_KEY, {
// apiVersion: "2022-11-15",
// });
// export async function stripePayment(req: Request, res: Response) {
// stripePay.charges.create(0
// {
// @ts-ignore
// source: req.body.tokenId,
// @ts-ignore
// amount: req.body.amount,
// currency: "usd",
// },
// @ts-ignore
// (stripeErr, stripeRes) => {
// if (stripeErr) {
// @ts-ignore
// res.status(500).json(stripeErr);
// } else {
// @ts-ignore
// res.status(200).json(stripeRes);
// }
// }
// );
// }
