import React from 'react';
import Navbar from '../../components/Navbar';
import ListItem from '../../components/ListItem/ListItem';
import {Button} from '@material-ui/core';
import {Col, Container, Row} from 'react-bootstrap';
import {useCartContext} from '../../util/Store';

function Cart({products}) {
    products = [];
    const [state, ] = useCartContext();
    return (
        <div>
            <Navbar/>
            <Container className="flex, flex-column">
                <Col>
                {console.log(state.cart)}
            {state.cart.map(product => 
                { console.log(product); return (<ListItem product={product}/>);})}
            </Col>

            </Container>
            <Container className="flex, flex-column">

            <Button variant="click-button" style={{backgroundColor: "#80ffdb", marginTop: "2rem", alignSelf: "right"}} href="/shipping">
                Checkout
            </Button>
            
            </Container>

        </div>
    )
}

export default Cart
