import axios from "axios";

export const API = {
  // Gets user
  getUser: function(userCred)  {
    return axios.get("/api/user/", userCred);
  },
 // Gets user
  postUser: (userData) => {
        return axios.post("/api/user/", userData);
      },
  // Gets all orders
  getOrders: function(userID)  {
    return axios.get("/api/orders/", userID);
  },
  // Creates Orders
  postOrder: async (orderData) => {
    let res = await axios.post("/api/user/", orderData);
    return res.status;
  },
  // Gets the product with the given id
  getProduct: function() {
    return axios.get("/api/products/");
  },
  // Deletes the order with the given id
  deleteOrder: async function(orderID) {
    let res = await axios.delete("/api/books/" + orderID);
    return res.status;
  },
  // Saves a book to the database
  saveBook: async function(bookData) {
    let res = await axios.post("/api/books", bookData);
    return res.status;
  },
 // <Redirect push to="/search"/>
  getSearchPage: (searchTerm) => {
    axios.get("/search/" + searchTerm)
      .then(response => {
        return(response.data);
      })
  },
 };
  

