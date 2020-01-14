import React, { Component } from 'react';
import {Sidebar, Home, Categories} from './../../components/dashboard';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Sidebar history={this.props.history} />
                <div style={{ paddingLeft: '70px' }}>
                    <Switch>
                        <Route exact path="/dashboard" component={Home} />
                        <Route path="/dashboard/categories" component={Categories} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Dashboard