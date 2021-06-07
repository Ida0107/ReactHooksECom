import './App.css';
import Login from './components/LoginComponent/Login';
import { Switch, Link, Route } from 'react-router-dom';
import Products from './components/ProductsComponent/Products';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
