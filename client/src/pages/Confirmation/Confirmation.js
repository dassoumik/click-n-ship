import React from 'react';
import Navbar from '../../components/Navbar';
import {
  Form,
  Col,
} from 'react-bootstrap';
import {
  Container,
  Card,
  Typography
} from '@material-ui/core';
import './Confirmation.css';

function Confirmation() {
  return (
    <div >
    <Navbar />
    <Container className="payment-container" style={{width: "35%", display: "flex", flexDirection: "column", alignContent: "center"}}>
     <Col className="md-col-2"></Col> 
     <Col className="md-col-8"> 
      <Typography className="mb-5 text-center"  variant="h5" component="h6">Confirmation!</Typography>
     <Card className="payment-card" style={{backgroundColor: "#3d4a5d", backgroundImage: "(linearGradient: 'to right, #121212, #3d4a5d')", color: '#f1ca89', boxShadow: '0 0 4px 4px #7e8c99', marginRight: "20%"}}>    
     <Form>
     <Form.Row>
     <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Your Payment was processed successfully.</Form.Label>
      <Form.Label>Thank you for your order!</Form.Label>
      <Form.Label> </Form.Label>
      <Form.Label> </Form.Label>
      <Form.Label>You will receive an email once your item ships.</Form.Label>
    </Form.Group>
    </Form.Row>

  
</Form>
</Card>
</Col>
<Col className="md-col-2"></Col>
 </Container > 
 </div > 
  )
}

export default Confirmation