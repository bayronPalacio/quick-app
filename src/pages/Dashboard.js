import React from 'react';
import AddProduct from './AddProduct';
import ExportProducts from './ExportProducts';
import ImportProducts from './ImportProducts';
import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Orders from './Orders';
import Inventory from './Inventory';

const Dashboard = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path='/inventory' exact component={Inventory} />
                <Route path='/addProduct' exact component={AddProduct} />
                <Route path='/exportProducts' exact component={ExportProducts} />
                <Route path='/importProducts' exact component={ImportProducts} />
                <Route path='/orders' exact component={Orders} />
            </Switch>
        </Router>
    );
}

export default Dashboard;