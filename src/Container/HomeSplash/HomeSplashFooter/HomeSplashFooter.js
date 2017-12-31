import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
//import './HomeSplashFooter.scss'

export default class HomeSplashFooter extends Component {

    render() {
        return (
            <div id="homesplash-footer">
           
                 <div className="footerContent">
                    <Row className="navigation">
                        <Col sm={12} md={6}>
                            <ul>
                                <li>Tech Uncensored Blog</li>                            
                                <li>Custom IoT Development</li>
                                <li>Custom Software Engineering</li>
                                <li>Education / Speaking Opportunities</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6}>
                            <ul>
                                <a href="https://twitter.com/tech_uncensored"><li>Twitter</li></a>
                                <a href="https://snapchat.com"><li>Snapchat</li></a>
                                <a href="https://www.facebook.com/techuncensored/"><li>Facebook</li></a>
                                <a href="https://www.instagram.com/tech_uncensored/"><li>Instagram</li></a>
                            </ul>
                        </Col>
                       
                    </Row>
                    <div className="greybar"></div> 
                    <div className="ctaFooter">
                    Educating and making programming fun on our forever learning adventure. <br /> Covering all topics of programming & technology. Let's build a community of talent.
                    </div>
                 </div>
                   
            </div>
        )
    }

}
