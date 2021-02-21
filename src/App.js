import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import ExportProducts from './pages/ExportProducts';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import ImportProducts from './pages/ImportProducts';
import Products from './pages/Products';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
    <Switch>        
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/dashboard' exact component={Dashboard} />
    </Switch>
</Router>
  );
}

export default App;
