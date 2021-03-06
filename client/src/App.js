import './App.css';
import {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Product from './pages/Product/Product.js';
import Cart from './pages/Cart/Cart.js';
import ShippingInfo from './pages/ShippingInfo/ShippingInfo.js';
import Payment from './pages/Payment';
import Login from './pages/Login/Login.js';
import Profile from './pages/Profile/Profile.js';
import Order from './pages/Order/Order.js';
import Confirmation from './pages/Confirmation/Confirmation.js';
import LoginContext from './util/Contexts/LoginContext';

function App() {
  const [userData, setUserData] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
 
  return (
    <div className="App">
      <LoginContext.Provider value = {{userData, setUserData, loggedIn, setLoggedIn}}>
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/shipping" component={ShippingInfo}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/order" component={Order}/>
        <Route exact path="/confirmation" component={Confirmation}/>
      </Switch>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
