import React from 'react';
import Navbar from '../../components/Navbar';
import ListItem from '../../components/ListItem/ListItem';
import {Button} from '@material-ui/core'

function Cart({products}) {
    products = [];
    return (
        <div>
            <Navbar/>
            <Button variant="click-button" style={{backgroundColor: "#80ffdb", marginTop: "2rem", alignSelf: "right"}} href="/shipping">
                Checkout
            </Button>
            {products.map(product => 
            <ListItem product={product}/>
            )}
        </div>
    )
}

export default Cart
