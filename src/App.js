import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/addProduct' exact component={AddProduct} />
      </Switch>
    </Router>
  );
}

export default App;
