import React from 'react';
import Navbar from '../../components/Navbar';
import ListItem from '../../components/ListItem/ListItem';
import {Button} from '@material-ui/core';
import {Col, Container} from 'react-bootstrap';
import {useCartContext} from '../../util/Store';

function Cart() {
    const [state, dispatch] = useCartContext();
    // console.log(state.product);
    return (
        <div>
            <Navbar/>
            <div className="flex flex-column">
            {/* <Container className="flex, flex-column"> */}
                <Col className="sm-col-8 md-col-8">
                {console.log(state.cart)}
            {state.cart.map(product => 
                 {return (<ListItem product={product}/>);})}
            </Col>

            {/* </Container> */}
            {/* <Container className="flex, flex-column"> */}
                <Col className="sm-col-4">

            <Button variant="click-button" style={{backgroundColor: "#80ffdb", marginTop: "2rem", alignSelf: "right"}} href="/shipping">
                Checkout
            </Button>
                </Col>
            
            {/* </Container> */}
            </div>

        </div>
    )
}

export default Cart
