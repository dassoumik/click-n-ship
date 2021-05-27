const stripe = require('stripe')('rk_test_51Iv1oQBpbp1PocXbwJbWlGFauXuHJrTRhrvsDBph08D6cNp7nQ3wA1YWsTsMERoCt8lmbhtAzkB10W9aLrp3ebmc0044tlj5wG'); 
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
    