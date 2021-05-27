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
import {API} from "../../util/Connections";

function LoginComp() {
  
  const {setUserData} = useContext(LoginContext);   
  const {setLoggedIn} = useContext(LoginContext);
  const refUserName = useRef();
  const refUserEmail = useRef();
  const refPassword = useRef();
  const refAddress1 = useRef();
  const refAddress2 = useRef();
  const refAddress3 = useRef();
  const refCity = useRef();
  const refState = useRef();
  const refZip = useRef();
  const history = useHistory();

  const authUser = (e) => {
      //API call to validate user credentials;
      const userCred = {
        email: refUserEmail?.current?.value, 
        password: refPassword?.current?.value
      }
      API.getUser(userCred)
          .then(res => {
      
      if (res.status === 200) {
      setUserData(res.data);
      setLoggedIn(true);
      history.push("/product");
      } else {
        alert("email or password is wrong");
      }
      return res.data;
    }).then(data => console.log(data));
   
  }
  let userData = {
    name: refUserName?.current?.value,
    email: refUserEmail?.current?.value, 
    password: refPassword?.current?.value, 
    addressStreetOne: refAddress1?.current?.value,
    addressStreetTwo: refAddress2?.current?.value, 
    addressStreetThree: refAddress3?.current?.value, 
    addressCity: refCity?.current?.value, 
    addressState: refState?.current?.value, 
    addressZip: refZip?.current?.value
  }

  const createUser = () => {
    //API call to validate user credentials;
     userData = {
      name: refUserName?.current?.value,
      email: refUserEmail?.current?.value, 
      password: refPassword?.current?.value, 
      addressStreetOne: refAddress1?.current?.value,
      addressStreetTwo: refAddress2?.current?.value, 
      addressStreetThree: refAddress3?.current?.value, 
      addressCity: refCity?.current?.value, 
      addressState: refState?.current?.value, 
      addressZip: refZip?.current?.value
    }
    API.postUser(userData)
     .then(status => {
       if (status === 200) {
          history.push("/product") 
          setUserData(userData);
          setLoggedIn(true);
    } else {
      alert("Something went wrong")  
    }})

}

    return (
        <div >
        <Container className="shipping-container " style={{width: "80%", padding: "4rem", backgroundColor: "#a2b29f"}}>
         
         <Card className="shipping-card" raised="true" style={{backgroundColor: "#3d4a5d", backgroundImage: "(linearGradient: 'to right, #121212, #3d4a5d')", color: '#f1ca89', boxShadow: '0 0 4px 4px #7e8c99',}}>    
         <Form>
         <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
          <Form.Control className="form-control" type="email" placeholder="Enter email" ref={refUserEmail}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={refPassword} />
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
          <Form.Control type="text" placeholder="Enter name" ref={refUserName}/>
        </Form.Group>
      </Form.Row>
    
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" ref={refAddress1}/>
      </Form.Group>
    
      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" ref={refAddress2}/>
      </Form.Group>
    
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Address 3</Form.Label>
          <Form.Control type="text" placeholder="Address Line 3" ref={refAddress3} />
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
        <Form.Control placeholder="" ref={refCity}/>
         </Col>
         <Col style={{marginRight: "1rem"}}>
        <Form.Control as="select" defaultValue="Choose..." ref={refState}>
          </Form.Control>
         </Col>
         <Col>
        <Form.Control placeholder="" ref={refZip} />
         </Col>
       </Form.Row> 
      
      <Form.Row style={{display: "flex", justifyContent: "center"}}>
      <Button variant="click-button" style={{backgroundColor: "#80ffdb",   marginTop: "2rem"}} onClick={createUser}>
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
