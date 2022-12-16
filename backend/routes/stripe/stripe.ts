import express from "express";
import stripe from "stripe";
const router = express.Router();

router.post("/payment", async (req, res) => {
  // @ts-ignore
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: `usd`,
    },
    // @ts-ignore
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;

// import express from "express";
// const router = express.Router();
// import Stripe from "stripe";
// // @ts-ignore
// const stripePayment = new Stripe(process.env.STRIPE_KEY, {
//   apiVersion: "2022-11-15",
// });

// router.post(`/payment`, (req, res) => {
//   // try {
//   stripePayment.charges.create(
//     {
//       source: req.body.token,
//       amount: req.body.amount,
//       currency: "usd",
//     },
//     // @ts-ignore
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
//   // } catch (error) {
//   console.log(`from here `);
//   // @ts-ignore
//   res.status(500).json({ error: error.message });
//   // }
// });

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
