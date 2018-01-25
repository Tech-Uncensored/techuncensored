import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import './OurWork.scss'

export default class OurWork extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col className="order-2" sm={12} md={6}>
                    
                        <h1 className="text-center">Current Projects</h1>
                             <p className="work">
                             At T_U, a wide variety of concepts are being worked on day and night. Some of these projects will be listed here. As time progresses, more applications and working designs will be posted.
                             </p>
                    
                    </Col> 
                    <Col sm={12} md={6}>
                    <div className="img-one"></div>
                    </Col>
                </Row>  
                <div className="whitespace"></div>
                 <Row>
                    <Col sm={12} md={6}>
                        <h1 className="text-center">T_U Lab:</h1>
                             <h3 className="soon text-center">
                                Coming soon.
                             </h3>
                             <p className="work">
                                The lab will generate exciting new ideas for the public to try! Stay tuned...
                             </p>
                             
                    </Col>
                    <Col sm={12} md={6}>
                         <div className="img-two"></div>
                    </Col>
                </Row>  
            </div>
        )
    }
}
