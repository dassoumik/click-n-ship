const stripe = require('stripe')(process.env.SECRET_KEY);
const cors = require('cors');

module.exports  = {
     create: cors(), async function(req, res) {
          console.log(req.body);      
          const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "usd"
          }); 
     res.send({
       clientSecret: paymentIntent.client_secret
     });
  }
}
    