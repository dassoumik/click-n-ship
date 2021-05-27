import React, {useContext, useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import {Col, Row} from 'react-bootstrap';
import {Card} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {API} from '../../util/Connections';
import './Order.css';
import LoginContext from "../../util/Contexts/LoginContext"

function Order() {
    const { loggedIn } = useContext(LoginContext);
    const { userData } = useContext(LoginContext);
    const [orderData, setOrderData] = useState();

    useEffect(() => {
        if (loggedIn)
        fetchOrderData();
    }, [ loggedIn])

    let totalPrice = 0.00;
    let grandTotalPrice = 0.00;
    function fetchOrderData() {
        API.getOrders(userData?.email)
           .then(res => setOrderData(res.data)); 
    }

    return (
        <div>
        <Navbar/>
        {loggedIn && orderData?.length ? 
        <Row className="d-flex flex-column sm-col-12 md-col-6 m-5" style={{justifyItems:"center", justifyself: "center"}}>
                    <Col className="sm-col-0 md-col-1"></Col>
                    <Col className="sm-col-12 md-col-10 order-container pt-5">
                    <Typography className="mb-3">Order History</Typography>  
                      
                      {orderData?.map(order => {return (
                       <Row>
                           <div className="d-none">
                              {totalPrice = 0.00}
                              </div> 
                              <Typography>===========================</Typography>
                      <Card className="order-card" raised="true">   
                       <Typography variant="small" >
                          <span className="pr-5">Order   :   {order._id}</span> 
                          {/* <span className="d-none"> {const dt = }</span> */}
                          <span className="ml-5">   Date : {order.date}</span>
                       </Typography >
                       <Row>
                              <Col className="sm-col-3">
                              <Typography >
                                <span>Product</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-3">
                              <Typography>
                                <span>Unit</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-3">
                              <Typography>
                                <span>Qnty</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-3">
                              <Typography>
                                <span>Tot</span>
                              </Typography>
                              </Col>
                          </Row>
                       {order?.products?.map(product => { return (
                          <Row>
                              <Col className="sm-col-7">
                              <Typography variant="body2">
                                <span>{product.title.substring(0,5)}</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-2">
                              <Typography variant="body2">
                                <span>{parseFloat(product.price).toFixed(2)}</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-1">
                              <Typography variant="body2">
                                <span>1</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-2">
                              <Typography variant="body2">
                                <span>{parseFloat(product.price).toFixed(2)}</span>
                              </Typography>
                              </Col>
                              <div className="d-none">
                              {totalPrice += product.price*1}
                              {grandTotalPrice += product.price*1}
                              </div>
                          </Row>
                       )})}
                       <Row className="mt-2">
                           <Col className="sm-col-3"></Col>
                           <Col className="sm-col-3 text-left">
                               <Typography >
                                   Tax: 
                               </Typography>
                           </Col>
                           <Col className="sm-col-3">
                               <Typography>
                                   {parseFloat((grandTotalPrice*0.07).toFixed(2))} 
                               </Typography>
                           </Col>

                       </Row>
                       <Row>
                           <Col className="sm-col-3"></Col>
                           <Col className="sm-col-3 text-left">
                               <Typography>
                                   Shipping: 
                               </Typography>
                           </Col>
                           <Col className="sm-col-3">
                               <Typography>
                                   {parseFloat(10.00).toFixed(2)} 
                               </Typography>
                           </Col>

                       </Row>
                       <Row>
                           <Col className="sm-col-3"></Col>
                           <Col className="sm-col-3 text-left">
                               <Typography>
                                   Total: 
                               </Typography>
                           </Col>
                           <Col className="sm-col-3 text-left">
                               <Typography>
                               {parseFloat(String(order.totalPrice.toFixed(2)))}
                               </Typography>
                           </Col>

                       </Row>
                      </Card>  
                      </Row>)})} 
                    </Col>
                    <Col className="sm-col-0 md-col-1"></Col>
   
            </Row>
         :  <div>No orders available for the user </div>
        
        }
        </div>
    )
}

export default Order

