import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Product from './pages/Product/Product.js';
import ShippingInfo from './pages/ShippingInfo/ShippingInfo.js';
import PaymentInfo from './pages/PaymentInfo/PaymentInfo.js';
import Login from './pages/Login/Login.js';



function App() {
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/shipping" component={ShippingInfo}/>
        <Route exact path="/payment" component={PaymentInfo}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
