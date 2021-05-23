import React, {useContext} from 'react';
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
import './ShippingInfo.css';
import LoginContext from '../../util/Contexts/LoginContext';


function ShippingInfo() {
  const {loggedIn} = useContext(LoginContext);
  const {userData} = useContext(LoginContext);

  console.log(userData);

  const history = useHistory();

   function loadCart () {
     history.push("/cart");
   }
   
  function loadPayment () {
    history.push("/payment");
  }
  
  return (
    <div >
    <Navbar />
    <Container className="shipping-container " style={{width: "80%", padding: "4rem"}}>
      <Typography className="mb-5" variant="h5" component="h6">Ship To</Typography>
     <Card className="shipping-card" style={{backgroundColor: "#3d4a5d", backgroundImage: "(linearGradient: 'to right, #121212, #3d4a5d')", color: '#f1ca89', boxShadow: '0 0 4px 4px #7e8c99',}}>    
     <Form>
     <Form.Row>
     <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      {loggedIn ? 
      <Form.Control type="text" placeholder="Enter name" value={userData.name} /> : <Form.Control type="text" placeholder="Enter name" /> }
    </Form.Group>

    
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    {loggedIn ?  <Form.Control placeholder="1234 Main St" value={userData.addressStreetOne} /> :  <Form.Control placeholder="1234 Main St"  />}
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    {loggedIn ? <Form.Control placeholder="Apartment, studio, or floor" value={userData.addressStreetTwo}/> : <Form.Control placeholder="Apartment, studio, or floor" />}
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Address 3</Form.Label>
      {loggedIn ? <Form.Control type="text" placeholder="Address Line 3" value={userData.addressStreetThree}/> : <Form.Control type="text" placeholder="Address Line 3" />}
    </Form.Group>

  <Form.Row>
 
  </Form.Row>

  
  <Form.Row style={{display: "flex", justifyContent: "space-between"}}>
    <Col style={{marginRight: "1rem"}}>
    <Form.Label>City</Form.Label>
    </Col>
    <Col style={{marginRight: "1rem"}}>
    <Form.Label>State</Form.Label>
    </Col>
    <Col>
    <Form.Label>Zip</Form.Label>
    </Col>
  </Form.Row>  
   <Form.Row style={{display: "flex", justifyContent: "space-between"}}>
     <Col style={{marginRight: "1rem"}}>
    {loggedIn ? <Form.Control placeholder="" value={userData.addressCity} /> : <Form.Control placeholder="" />}
     </Col>
     <Col style={{marginRight: "1rem"}}>
    {/* <Form.Control placeholder="" /> */}
    {loggedIn ?
    <Form.Control as="select" defaultValue={userData.addressState}>
        <option>{userData.addressState}</option>
        <option>...</option>
      </Form.Control> :
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>}
     </Col>
     <Col>
     {loggedIn ? <Form.Control placeholder="" value={userData.addressZip} /> : <Form.Control placeholder="" />}
     </Col>
  {/* </Form.Group> */}
   </Form.Row> 

  {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Form.Row style={{display: "flex", justifyContent: "space-between"}}>
  <Button variant="click-button" style={{backgroundColor: "#80ffdb", marginLeft: "2rem", marginTop: "2rem"}} onClick={loadCart}>
    Back
  </Button> 
  <Button variant="click-button" style={{backgroundColor: "#80ffdb",  marginRight: "2rem", marginTop: "2rem"}} onClick={loadPayment}>
    Pay
  </Button>
  </Form.Row>   
  
</Form>
</Card>
 </Container > 
 </div > 
  )
}


export default ShippingInfo