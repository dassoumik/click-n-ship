import React, { createContext, useReducer, useContext } from "react";
import {productData, userData } from "./Api";

const CartContext = createContext();
const { Provider } = CartContext;
const { name } = userData;
const userID = userData.id;

const reducer = (state, action) => {
let newCart = [...state.cart]; 

let cartItemRemoved = newCart.splice(action.item, 1);

  switch (action.type) {
  case "ADD-TO-CART":
    return {...state, 
            count: state.count + 1,
             cart: [...state.cart, action.item],
             user: {
                id: userID,
                name
            },
            cartSubTotal: state.cartSubTotal + parseFloat(action.item.price) };
  case "DELETE-FROM-CART":
    return { ...state,
             count: state.count - 1,
             cartSubTotal: state.cartSubTotal - parseFloat(state.cart[action.item].price),
             cart: newCart};
  case "INIT-CART":
  return { ...state,
            count: 0,
            cartSubTotal: 0.00,
            cart: []};
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const CartProvider = ({ value = {
    count: 0,
    cart: [],
    user: {},
    cartSubTotal: 0,
    cartTotal: 0,
}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value.count, cart: value.cart, user: value.user, cartSubTotal: value.cartSubTotal, cartTotal: value.cartTotal });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
