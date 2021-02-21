import React from 'react';
import AddProduct from './AddProduct';
import ExportProducts from './ExportProducts';
import ImportProducts from './ImportProducts';
import Products from './Products';
import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path='/addProduct' exact component={AddProduct} />
                {/* <Route path='/exportProducts' exact component={ExportProducts} />
                <Route path='/importProducts' exact component={ImportProducts} />
                <Route path='/products' exact component={Products} /> */}
            </Switch>
        </Router>
    );
}

export default Dashboard;