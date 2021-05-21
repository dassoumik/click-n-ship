import React, {useContext} from 'react';
import Navbar from "../../components/Navbar";
import {Form, Container, Col, Row} from 'react-bootstrap';
import {Card} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import LoginContext from '../../util/Contexts/LoginContext';
import './Profile.css';

function Profile() {
    const { userData }= useContext(LoginContext);
    console.log(userData);
 
    return (
        <div>
        <Navbar/>
        <div className="d-flex flex-column sm-col-12" style={{justifyItems:"center", justifyself: "center"}}>
            {/* <Container className="m-5 text-white profile-container" style={{width: "40%", }}> */}
                {/* <Row> */}
                    <Col className="sm-col-0 md-col-3"></Col>
                    <Col className="sm-col-12 md-col-6 profile-container pt-5">
                      <Card className="profile-card" raised="true">   
                       <Typography variant="h5">
                          <span>{userData.name}</span>
                       </Typography >
                      </Card>  
                      <Card className="profile-card" raised="true">
                       <Typography variant="strong">
                           Email: <span> {userData.email}</span>
                       </Typography>
                       </Card>
                       <Card className="profile-card" raised="true">   
                       <Typography variant="strong">
                          <div>{userData.addressStreetOne} </div>
                       </Typography>
                       <Typography variant="strong">
                          <div>{userData.addressStreetTwo}</div>
                       </Typography>
                       <Typography>
                          <div>{userData.addressStreetThree}</div>
                       </Typography>
                       <Typography variant="strong">
                          <div>{userData.addressCity},  <span>{userData.addressState}</span></div>
                       </Typography>
                       <Typography variant="strong">
                          <span>{userData.addressZip}</span>
                       </Typography>
                      </Card>  
                    </Col>
                    <Col className="sm-col-0 md-col-3"></Col>
                {/* </Row>  */}
            {/* </Container> */}
            {/* <Container className="m-5 text-white profile-container" style={{width: "40%", }}>    
                <Row>
                    <Col>
                       
                    </Col>
                </Row>
            </Container>
            <Container className="m-5 text-white profile-container" style={{width: "90%", }}>
                <Row>
                    <Col>
                      
                    </Col>
                </Row> 
            </Container> */}
            </div>
        </div>
    )
}

export default Profile

