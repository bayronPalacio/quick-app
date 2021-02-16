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
    <div className="App">
        <div>
          <Route path="" component={Home} exact/>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration}/>
          <Route path="/addProduct" component={AddProduct}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
