import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row, PageHeader, Jumbotron } from 'react-bootstrap'
import './Sample.scss'

export default class Sample extends Component {
    render() {
        return (
            <div id="landing" className="container-fluid">
                 <img className="logo-image" src={require('../../public/images/tech_uncensored_logo_bg.png')} />
                    <Row>
                        <Col md={12}>
                            <header>
                                <h1>It's time to rethink</h1>
                                <h3>Web Applications and beyond</h3>
                            </header>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="cta-btns">
                                <Button bsStyle="warning">Call 215.515.8324</Button>
                                <Button bsStyle="warning">Call 215.515.8324</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="img-one">
                                 <img src={require('http://via.placeholder.com/350x150')} />
                                    <h2>Lightning fast pages with Mobile-First designs</h2>
                                        <p>
                                            Only proven methods and performance-enhanced custom solutions are used for development, and no app is complete without Virtual Reality included, standard.
                                        </p>
                            </div>
                        </Col>
                            <Col md={6} sm={12}>
                                <div className="img-two">
                                    <img src={require('http://via.placeholder.com/350x150')} />
                                        <h2>Lightning fast pages with Mobile-First designs</h2>
                                            <p>
                                            Only proven methods and performance-enhanced custom solutions are used for development, and no app is complete without Virtual Reality included, standard.
                                            </p>
                                </div>
                            </Col>
                        </Row> 
                    </div>

        )
    }
}
