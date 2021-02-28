import React from 'react';
import AddProduct from './AddProduct';
import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Orders from './Orders';
import Inventory from './Inventory';

const Dashboard = () => {
    return (
        <div className="rightSection">
            <h1>Dashboard</h1>
        </div>
    );

    // return (
        // <Router>
        //     <Sidebar />
        //     <Switch>
        //         <Route path='/inventory' component={Inventory} />
        //         <Route path='/addProduct' component={AddProduct} />
        //         <Route path='/orders' component={Orders} />
        //     </Switch>
        // </Router>
    // );
}

export default Dashboard;