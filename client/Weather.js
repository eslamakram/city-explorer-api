import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends Component {
    render() {
        return (
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>{this.props.city_name} EXPLORER</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.city_name}</Card.Title>
                    <Card.Text>
                      Date: {this.props.date}
                      Description: {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Weather
