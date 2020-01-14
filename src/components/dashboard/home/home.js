import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col sm="2">
                    <Card body>
                        <CardTitle>Categories</CardTitle>
                        <Button><NavLink to="/dashboard/categories">Explore</NavLink></Button>
                    </Card>
                </Col>
                <Col sm="2">
                    <Card body>
                        <CardTitle>Products</CardTitle>
                        <Button>Explore</Button>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Home;