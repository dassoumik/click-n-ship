import React from 'react'
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {PaymentForm} from '../../components/PaymentForm/PaymentForm';
import Navbar from '../../components/Navbar';

const stripePromise = loadStripe('pk_test_51Iv1oQBpbp1PocXbux3EqQrtdBMxLZ5eK2bslufAi28AqWknbTtFzRc4aTJWM0gdDFZTGDpSVTUXhNZoLen8Bl9D00IH5aQhBU');

function Payment() {
    return (
        <>
        <Navbar/>
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
        </>
    )
}

export default Payment
