import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/login';
import Register from './containers/register';
import Dashboard from './containers/dashboard';
import PrivateRoute from './components/PrivateRoute';
import { _global } from './helpers'
import {withRouter} from 'react-router-dom'

const Routes = () => {
    return (

        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Register} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>

    )
}

export default Routes;