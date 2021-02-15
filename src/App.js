import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registrations';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <div>
          <Route path="/login" component={Login} exact/>
          <Route path="/registration" component={Registration}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
