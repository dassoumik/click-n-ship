import React, { createContext, useReducer, useContext } from "react";
import {productData, userData } from "./Api";

const CartContext = createContext();
const { Provider } = CartContext;
const { id, title, image, price, category, rating, numOfRating } = productData;
const { name } = userData;
const userID = userData.id;

const reducer = (state, action) => {
//    const {product} = state;
console.log(state, action.item);
//   const initState = {
//        count: 0,
//        cart: [],
//        user: null,
//        cartTotal: 0
//    }
  switch (action.type) {
  case "ADD-TO-CART":
    return {...state, 
            count: state.count + 1,
             cart: [...state.cart, action.item],
             user: {
                id: userID,
                name
            },
            cartTotal: state.cartTotal + parseFloat(action.item.price) };
  case "subtract":
    return { count: state.count - 1 };
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const CartProvider = ({ value = {
    count: 0,
    cart: [],
    user: {},
    cartTotal: 0
}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value.count, cart: value.cart, user: value.user, cartTotal: value.cartTotal });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
