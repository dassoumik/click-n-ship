import React, {useState, useEffect, useContext} from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {
    Form,
    Col,
  } from 'react-bootstrap';
  import {
    Container,
    Card,
    Button,
    Typography
  } from '@material-ui/core';
  import {useCartContext } from '../../util/Store';
  import {API} from '../../util/Connections';
  import LoginContext from '../../util/Contexts/LoginContext';
  import './PaymentForm.css';

// function PaymentForm() {
//     return (
//         <div>
export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const {loggedIn} = useContext(LoginContext);
  const {userData} = useContext(LoginContext);
  const [state, dispatch] = useCartContext();
  const orderData = {userEmail: "",
  orderId: "",
  totalPrice: 0.00,
  products: []};

  const paymentAmount = parseFloat(state.cartSubTotal) + parseFloat(state.cartSubTotal*.07) + 10;


  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    console.log("in use Effect")
    window
      .fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "clicknship" }]})
      })
      .catch(err => console.error(err))
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
        console.log(clientSecret)
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "1rem",
        "::placeholder": {
          color: "#32325d"
        },
        border: '1px',
        marginBottom: '.5rem',
        backgroundColor: '#ffff'
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("in handle submit")
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement('card'),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      try {
                    const {id} = paymentMethod
                    const response = await axios.post("/api/stripe/", {
                        amount: state.cart.totalAmount,
                        id,
                        email: state.cart.userEmail,
                        payment_method: paymentMethod.type,
                    })
        
                    console.log(response);
                    if(response.status === 200) {
                        console.log("Successful payment")
                        // history.push('/confirmation');
                        loggedIn ? orderData.userEmail = userData.email : orderData.userEmail = ""
                        orderData.totalPrice = paymentAmount
                        orderData.products = state.cart
                        const status = await API.postOrder(orderData) 
                                                .then(status => status);
                        status === 200 ? 
                        history.push("/confirmation")
                        : alert(`Something went wrong! 
                                 Please try after sometime. 
                                 If your card has been charge it will be auto refunded.`)
                    }
        
                } catch (error) {
                    console.log("Error", error)
                }
            } else {
                console.log(error.message)
            }
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
        console.log("in payload success", payload)
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  function loadShipping() {
    history.push("/shipping");
  }
        

  return (

  <Container className="payment-container" style={{width: "60%", display: "flex", flexDirection: "column", alignContent: "center"}}>
     <Col className="md-col-2"></Col> 
     <Col className="md-col-8"> 
      <Typography className="mb-5" variant="h5" component="h6">Payment Details</Typography>
     <Card className="payment-card" style={{backgroundColor: "#3d4a5d", backgroundImage: "(linearGradient: 'to right, #121212, #3d4a5d')", color: '#f1ca89', boxShadow: '0 0 4px 4px #7e8c99', marginRight: "20%"}}>    
     <Form>
     <Form.Row>
     <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Account holder's name" />
    </Form.Group>

    
  </Form.Row>
    <Form.Row>
  <Form.Group controlId="formGridAddress1" style={{marginTop: '.5rem'}}>
    <Form.Label>Card Details</Form.Label>

     <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
   </Form.Group>
   </Form.Row> 
   <Form.Row style={{display: "flex", justifyContent: "space-between", marginTop: '1rem'}}>
    <Form.Group>
    <Form.Label>Amount</Form.Label>
    <Form.Control placeholder="$"  disabled ="disabled" value={paymentAmount.toFixed(2)}/>
   </Form.Group>
  </Form.Row>
    <Form.Row style={{display: "flex", justifyContent: "space-between", marginTop: '1rem'}}>
    <Button variant="click-button" style={{backgroundColor: "#80ffdb", }} onClick={loadShipping}>
    Back
  </Button> 
  <Button variant="click-button" style={{backgroundColor: "#80ffdb", }}  onClick={handleSubmit} >
    Pay
  </Button>
    </Form.Row>    
</Form>
</Card>
</Col>
<Col className="md-col-2"></Col>
 </Container > 
     
  );
};



    //     </div>
    // )
// }

export default PaymentForm
