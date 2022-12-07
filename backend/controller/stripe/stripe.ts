import Stripe from "stripe";
// @ts-ignore
const stripePay = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: "2022-11-15",
});

export async function stripePayment(req: Request, res: Response) {
  stripePay.charges.create(
    {
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
      } else {
        // @ts-ignore
        res.status(200).json(stripeRes);
      }
    }
  );
}
