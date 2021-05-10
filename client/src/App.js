import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Product from './pages/Product/Product.js';



function App() {
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/Product" component={Product}/>
      </Switch>
    </div>
  );
}

export default App;
