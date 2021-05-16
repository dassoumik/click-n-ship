import React from 'react';
import Navbar from '../../components/Navbar';
import ListItem from '../../components/ListItem/ListItem';

function Cart({products}) {
    products = [];
    return (
        <div>
            <Navbar/>
            {products.map(product => 
            <ListItem product={product}/>
            )}
        </div>
    )
}

export default Cart
