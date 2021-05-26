const stripe = require('stripe')('sk_test_51Iv1oQBpbp1PocXbH3S1OvqhPO954ukC53q9sqMfA6ThVAyLHUnyLcbV3Gbc6kolmiGScUiGBdZV6JgJ0enK8Aka00iK6qk1At');
const db = require("../models");
const YOUR_DOMAIN = 'http://localhost:3000/confirmation';
// define route methods for user controller
module.exports = {
    create: function(req, res) {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Click-n-Ship',
                  },
                  unit_amount: 2000,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
          });
    }
}