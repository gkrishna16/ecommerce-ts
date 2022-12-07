"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripePayment = void 0;
const stripe_1 = __importDefault(require("stripe"));
// @ts-ignore
const stripePay = new stripe_1.default(process.env.STRIPE_KEY, {
    apiVersion: "2022-11-15",
});
function stripePayment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        stripePay.charges.create({
            // @ts-ignore
            source: req.body.tokenId,
            // @ts-ignore
            amount: req.body.amount,
            currency: "usd",
        }, 
        // @ts-ignore
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                // @ts-ignore
                res.status(500).json(stripeErr);
            }
            else {
                // @ts-ignore
                res.status(200).json(stripeRes);
            }
        });
    });
}
exports.stripePayment = stripePayment;
