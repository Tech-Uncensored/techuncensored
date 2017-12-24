import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row, PageHeader, Jumbotron } from 'react-bootstrap'

import './AboutUs.scss'

export default class AboutUs extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <Col sm={12} md={6}>
                        <h1>Mission</h1>
                             <p>
                             Tech_Uncensored is a company with great standards and morals. The client comes first and will always be served with modern technology and outstanding support. Commited to helping anyone, Paul and Nick devote time to schhols and meet-ups with knowledge on how to tackle an education and career in the software industry.Array
                             A Slack and Discord channel are open and available to join for anyone who would like to receive help, or join like-minded individuals. All requested solutions will be fully realized and fullfilled.
                             </p>
                    </Col> 
                    <Col sm={12} md={6}>
                        <div className="image-paul">
                        
                        </div>
                    </Col>
                </Row>  
                <div className="whitespace"></div>
                 <Row>
                    <Col sm={12} md={6}>
                        <h1>Future</h1>
                             <p>
                             As many services and applications are available, T_U prides themselves on learning and implementing anything that is coming out. Currently, they are working on a variety of creative developments. From Alexa voice to Virtual Reality, concepts will continue to develop.
                             </p>
                    </Col>
                     <Col sm={12} md={6}>
                        <div className="image-nick">
                        
                        </div> 
                    </Col> 
                 </Row>   
            </div>
        )
    }
}
