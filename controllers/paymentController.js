const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "ShopCornerProject",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: pk_test_51JnOJvDGF9zMldysHfcfab7dllrbGqdMD6IQYZgclQGpbe9pR3YpokSF9JkFfwBHFunOCl27ZylaXt1Oo7XZzuPl00K5cxBann });
});