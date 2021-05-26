import axios from "axios";

export const API = {
  // Gets user
  getUser: async function (userCred) {
    console.log(userCred);
    const params = new URLSearchParams([['email', userCred.email], ['password', userCred.password]]);
    let res = await axios.get("/api/users/", { params });
    return res;
  },
  // Gets user
  postUser: async function (userData) {
    console.log(userData);
    try {
      let res = await axios.post("/api/users/", userData);

      // console.log(res.status);
      return res.status;
    } catch (err) { console.error(err) }
  },
  // Gets admin
  getAdmin: async function (adminCred) {
    console.log(adminCred);
    const params = new URLSearchParams([['email', adminCred.email], ['password', adminCred.password]]);
    let res = await axios.get("/api/admin/", { params });
    return res;
  },
  // post admin
  postAdmin: async function (adminData) {
    console.log(adminData);
    try {
      let res = await axios.post("/api/admin/", adminData);

      // console.log(res.status);
      return res.status;
    } catch (err) { console.error(err) }
  },
  // Gets all orders
  getOrders: function(userID)  {
    const params = new URLSearchParams([['userEmail', userID]]);
    console.log(params);
    return axios.get("/api/orders/", {params});
  },
  // Creates Orders
  postOrder: async (orderData) => {
    let res = await axios.post("/api/orders/", orderData);
    return res.status;
  },
  // Gets the product with the given id
  getProduct: function () {
    return axios.get("/api/products/");
  },
  // Deletes the order with the given id
  deleteOrder: async function (orderID) {
    let res = await axios.delete("/api/books/" + orderID);
    return res.status;
  },
  // Saves a book to the database
  saveBook: async function (bookData) {
    let res = await axios.post("/api/books", bookData);
    return res.status;
  },
  // <Redirect push to="/search"/>
  getSearchPage: (searchTerm) => {
    axios.get("/search/" + searchTerm)
      .then(response => {
        return (response.data);
      })
  },
};


