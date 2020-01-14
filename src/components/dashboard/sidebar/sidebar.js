import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './scss/sidebar.scss';

class Sidebar extends React.Component {

    logout = () => {
        sessionStorage.removeItem("access_token")
        this.props.history.push("/")
    }

    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
                className="dashboard-sidebar"
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <NavLink to="/dashboard">
                                Home
                        </NavLink>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <NavLink to="/dashboard/categories">
                                Categories
                        </NavLink>
                        </NavText>
                        {/* <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem> */}
                    </NavItem>
                    <NavItem eventKey="logout">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText onClick={this.logout}>
                            Logout
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        )
    }
}

export default Sidebar