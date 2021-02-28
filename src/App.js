import React from 'react';
import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <div>
        <Sidebar />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/addProduct' component={AddProduct} />
          <Route path='/inventory' component={Inventory} />          
        </div>
      </Switch>
    </Router>
  );
}

export default App;
