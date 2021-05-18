import React, { createContext, useReducer, useContext } from "react";
import {productData, userData } from "./Api";

const CountContext = createContext();
const { Provider } = CountContext;
const { id, title, image, price, category, rating, numOfRating } = productData;
const { name } = userData;
const userID = userData.id;

const reducer = (state, action) => {
   const {product} = state;
  switch (action.type) {
  case "ADD-TO-CART":
    return { count: state.count + 1,
             product: [...product,
                {
                id,
                title,
                image,
                price,
                category,
                rating,
                numOfRating
                }],
            user: {
                id: userID,
                name
            },
            cartTotal: state.cartTotal + price };
  case "subtract":
    return { count: state.count - 1 };
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const CountProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCountContext = () => {
  return useContext(CountContext);
};

export { CountProvider, useCountContext };
