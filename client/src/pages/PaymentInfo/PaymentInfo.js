import React from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from '../../components/Navbar';
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
import './PaymentInfo.css';
import {useCartContext } from '../../util/Store';

function PaymentInfo() {
  const [state, dispatch] = useCartContext();
  const history = useHistory();
  console.log(state.cartSubTotal);
  console.log(state.cart);
  const paymentAmount = parseFloat(state.cartSubTotal) + parseFloat(state.cartSubTotal*.07) + 10;

  function loadShipping() {
    history.push("/shipping");
  }

  function initiateStripe () {
    history.push("/confirmation");
  }
  return (
    <div >
    <Navbar />
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

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Card Number</Form.Label>
    <Form.Control placeholder="Card Number" />
  </Form.Group>

  <Form.Row style={{display: "flex", justifyContent: "space-between"}}>
    <Col style={{marginRight: "1rem"}}>
    <Form.Label>CVV</Form.Label>
    </Col>
    <Col style={{marginRight: "1rem"}}>
    <Form.Label>Expiry</Form.Label>
    </Col>
    <Col>
    <Form.Label>Amount</Form.Label>
    </Col>
  </Form.Row>  
   <Form.Row style={{display: "flex", justifyContent: "space-between"}}>
     <Col style={{marginRight: "1rem"}}>
    <Form.Control placeholder="CVV" />
     </Col>
     <Col style={{marginRight: "1rem"}}>
    <Form.Control placeholder="MM/DD" />
     </Col>
     <Col>
    <Form.Control placeholder="$"  disabled ="disabled" value={paymentAmount.toFixed(2)}/>
     </Col>
  {/* </Form.Group> */}
   </Form.Row> 
  
  <Form.Row style={{display: "flex", justifyContent: "space-between"}}>
  <Button variant="click-button" style={{backgroundColor: "#80ffdb", marginLeft: "2rem", marginTop: "2rem"}} onClick={loadShipping}>
    Back
  </Button> 
  <Button variant="click-button" style={{backgroundColor: "#80ffdb",  marginRight: "2rem", marginTop: "2rem"}} onClick={initiateStripe}>
    Pay
  </Button>
  </Form.Row>   
  
</Form>
</Card>
</Col>
<Col className="md-col-2"></Col>
 </Container > 
 </div > 
  )
}


export default PaymentInfo