import React, {useContext, useRef} from 'react';
import {
    Form,
    Col,
  } from 'react-bootstrap';
import {
    Container,
    Card,
    Button,
  } from '@material-ui/core';
import LoginContext from "../../util/Contexts/LoginContext";
import '../../pages/ShippingInfo/ShippingInfo.css';
import { useHistory } from 'react-router-dom';

function LoginComp() {
  
  const {setUserName} = useContext(LoginContext);   
  const {setLoggedIn} = useContext(LoginContext);
  const refUserName = useRef();
  const history = useHistory();

  const authUser = (e) => {
      // e.preventDefault();
      //API call to validate user credentials;
      console.log(refUserName?.current.value);
    setUserName(refUserName?.current.value);
    setLoggedIn(true);
    history.push("/product");
  }

    return (
        <div >
        <Container className="shipping-container " style={{width: "80%", padding: "4rem", backgroundColor: "#a2b29f"}}>
         
         <Card className="shipping-card" raised="true" style={{backgroundColor: "#3d4a5d", backgroundImage: "(linearGradient: 'to right, #121212, #3d4a5d')", color: '#f1ca89', boxShadow: '0 0 4px 4px #7e8c99',}}>    
         <Form>
         <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control className="form-control" type="email" placeholder="Enter email" ref={refUserName}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Row style={{display: "flex", justifyContent: "center"}}>
      <Button variant="click-button" style={{backgroundColor: "#80ffdb", marginTop: "2rem"}} onClick={authUser}>
        Login
      </Button> 
      
      </Form.Row>   
      
         <Form.Row>
         <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        
      </Form.Row>
    
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
    
      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
    
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Address 3</Form.Label>
          <Form.Control type="text" placeholder="Address Line 3" />
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
        <Form.Control placeholder="" />
         </Col>
         <Col style={{marginRight: "1rem"}}>
        {/* <Form.Control placeholder="" /> */}
        <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
         </Col>
         <Col>
        <Form.Control placeholder="" />
         </Col>
      {/* </Form.Group> */}
       </Form.Row> 
    
      
      <Form.Row style={{display: "flex", justifyContent: "center"}}>
      <Button variant="click-button" style={{backgroundColor: "#80ffdb",   marginTop: "2rem"}} href="/product">
        Singup
      </Button>
      </Form.Row>   
    </Form>
    </Card>
     </Container > 
     </div>
    )
}


export default LoginComp
