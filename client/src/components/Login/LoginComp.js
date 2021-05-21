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
// import {userData} from '../../util/Api';
import {API} from "../../util/Connections";

function LoginComp() {
  
  const {setUserName} = useContext(LoginContext);   
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
      API.getUser({email: refUserEmail, password: refPassword})
          .then(res => {
      setUserName(refUserName?.current.value);
      setLoggedIn(true);
      if (res.status === 200) {
      history.push("/product");
      } else {
        alert("email or password is wrong");
      }
    })
      // const userDBdata = userData[0];
      // if (userDBdata.email === refUserName.current.value && userDBdata.password === refPassword.current.value ) { 
      // console.log(refUserName?.current.value);
      // } else {
      //   alert("Email or Password incorrect")
      // }
  }
  console.log(refUserEmail?.current?.value);
  console.log(refUserName?.current?.value);

  const userData = {
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
    // e.preventDefault();
    //API call to validate user credentials;
    console.log("in create user");
    API.postUser(userData)
     .then(status => {
       if (status === 200) {
          history.push("/product") 
    } else {
      alert("Something went wrong")  
    }})
    setUserName(refUserName.current.value);
    setLoggedIn(true);

    // const userDBdata = userData[0];
    // if (userDBdata.email === refUserName.current.value && userDBdata.password === refPassword.current.value ) { 
    // console.log(refUserName?.current.value);

  // history.push("/product");
  //   // } else {
  //     alert("Email or Password incorrect")
  //   }
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
        {/* <Form.Control placeholder="" /> */}
        <Form.Control as="select" defaultValue="Choose..." ref={refState}>
            <option>Choose...</option>
            <option>GA</option>
          </Form.Control>
         </Col>
         <Col>
        <Form.Control placeholder="" ref={refZip} />
         </Col>
      {/* </Form.Group> */}
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
