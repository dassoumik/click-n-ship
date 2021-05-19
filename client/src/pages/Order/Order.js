import React from 'react';
import Navbar from "../../components/Navbar";
import {Col, Row} from 'react-bootstrap';
import {Card} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {orderData} from '../../util/Api';
import './Order.css';

function Order() {
    let totalPrice = 0.00;
    // let dt = DateTime;

    return (
        <div>
        <Navbar/>
        <Row className="d-flex flex-column sm-col-12 md-col-6 m-5" style={{justifyItems:"center", justifyself: "center"}}>
                    <Col className="sm-col-0 md-col-1"></Col>
                    <Col className="sm-col-12 md-col-10 order-container pt-5">
                    <Typography className="mb-3">Order History</Typography>  
                      
                      {orderData.map(order => {return (
                       <Row>
                           <div className="d-none">
                              {totalPrice = 0.00}
                              </div> 
                              <Typography>===========================</Typography>
                      <Card className="order-card" raised="true">   
                       <Typography variant="small" >
                          <span className="pr-5">Order   :   {order.orderID}</span> 
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
                       {order.productList.map(product => { return (
                          <Row>
                              <Col className="sm-col-7">
                              <Typography variant="body2">
                                <span>{product.productName.substring(0,5)}</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-2">
                              <Typography variant="body2">
                                <span>{parseFloat(product.unitPrice)}</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-1">
                              <Typography variant="body2">
                                <span>{product.quantity}</span>
                              </Typography>
                              </Col>
                              <Col className="sm-col-2">
                              <Typography variant="body2">
                                <span>{parseFloat(product.unitPrice)*parseFloat(product.quantity)}</span>
                              </Typography>
                              </Col>
                              <div className="d-none">
                              {totalPrice += product.unitPrice*product.quantity}
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
                                   {parseFloat(order.taxTotal)} 
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
                                   {parseFloat(order.shippingTotal)} 
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
                               {parseFloat(String(totalPrice))}
                               </Typography>
                           </Col>

                       </Row>
                      </Card>  
                      </Row>)})} 
                    </Col>
                    <Col className="sm-col-0 md-col-1"></Col>
   
            </Row>
        </div>
    )
}

export default Order

