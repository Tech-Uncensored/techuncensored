import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row, PageHeader, Jumbotron } from 'react-bootstrap'
import './Skills.scss'

export default class Sample extends React.Component {
    
    toggleMenu(e) {
        var event = e || window.event;
        var children = event.target.parentNode.getElementsByClassName('children')[0];
        children.style.display  = (children.style.display == 'none') ? 'flex' : 'none';
        
        var myevent = function(e) {
            var isClickInside = children.parentNode.contains(e.target);
            
            if(!isClickInside && children.style.display != 'none')
            {
                children.style.display = 'none';
                this.removeEventListener('click', myevent);
            }
        };
        
        document.addEventListener('click', myevent);
        return false;
    }
        
    render() {
        return (
            <div id="skills">
                <Row>
                    <Col sm={12}>
                        <div className="header-image">
                        <div style={{'position':'absolute','top':'0', 'left':0,'width':'100%','zIndex':'99'}}>
                            <div id="logo"></div>
                            <nav className="nav">
                                <div><a href="#" onClick={this.toggleMenu}>What We Do</a>
                                    <div className="row children" style={{ display:'none' }}>
                                        <div className="col-md-3">
                                            <div className="nav-section-title">Services</div>
                                            <ul className="nav-section-list">
                                                <li>Automation / IOT</li>
                                                <li>Custom Software Development</li>
                                                <li><a href="/sample">Website Development</a></li>
                                                <li>Digital Signage</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="nav-section-title">Highlighted Skills</div>
                                                <ul className="nav-section-list">
                                                    <li>PHP</li>
                                                    <li>More PHP</li>
                                                    <li>WordPress</li>
                                                    <li>and PHP ...</li>
                                                </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-12" style={{ 'height':'150px', 'background':'url("https://s3.us-east-2.amazonaws.com/tech-uncensored-assets/iot_raspberrypi_tech_uncensored.jpg") 0% 80%/cover' }}></div>
                                                <div style= {{ "padding":"20px 0", "width":"100%" }}></div>
                                                <div className="col-md-5" style={{ "height":"120px", "background":"url('https://s3.us-east-2.amazonaws.com/tech-uncensored-assets/code_tech_uncensored.jpg') center/cover" }}></div>
                                                <div className="col-md-5 offset-md-2" style={{ "height":"120px", "background":"url('https://cdn.pixabay.com/photo/2017/02/28/21/30/wolf-2106894_960_720.jpg') center/cover" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>Our Work</div>
                                <div>About Us</div>
                                <div><a href="/blog">Our Blog</a></div>
                            </nav>
                        </div>                        
                            <h1 className="top-header">Web Development</h1>
                            <div className="overlay"></div>
                        </div>
                    </Col>
                </Row>
                            
                <div className="skills-detail">
                    <Row>
                        <Col sm={12}>
                            <h1>Responsive Design</h1>
                            <p>
                               High performing, mobile-ready web applications. High performing, mobile-ready web applications.               High performing, mobile-ready High performing, mobile-ready web applications. High performing, mobile-ready web applications.
                            </p>
                             <p>
                               High performing, mobile-ready web applications. High performing, mobile-ready web applications.               High performing, mobile-ready High performing, mobile-ready web applications. High performing, mobile-ready web applications.
                            </p>
                            <p>
                               High performing, mobile-ready web applications. High performing, mobile-ready web applications.               High performing, mobile-ready High performing, mobile-ready web applications. High performing, mobile-ready web applications.
                            </p>
                            <h3>Subsection</h3>
                            <ul>
                                <li>Reason one</li>
                                <li>Reason two</li>
                            </ul>
                            <div className="btn">Call to action</div>
                        </Col>
                    </Row>
                </div>
                
                <Row>
                    <Col sm={12}>
                        <div style={{ 'height':'1px', 'padding':0, 'background':'#cfcfcf' }}></div>
                        <div className="text-center" style={{'padding':'12px 0','background':'#eee','color':'darkgrey', 'fontStyle':'italic', 'fontSize':'12px'}}>Small text detail here</div>
                    </Col>
                </Row>

                <div style={{ 'background':'#f6f6f6', 'padding':'100px 250px', 'color':'navy' }}>
                    <Row style={{ 'padding':'20px 0', 'alignItems':'center' }}>
                        <Col md={6}>
                           <h1>Analytics and Tracking</h1>
                            <p>Research & Development: Beyond software and IoT applications, T_U has started another division for>Starting with a Commitment to Clients: T_U focuses on a lot, and maintaining relationships</p>
                        </Col>
                        <Col md={6}>
                                <img src="http://placehold.it/600x250" style={{ 'maxHeight':'inherit' }}  />
                        </Col> 
                    </Row>
                    
                    <Row style={{ 'padding':'20px 0', 'alignItems':'center' }}>
                        <Col md={6}>
                                <img src="http://placehold.it/600x250" style={{ 'maxHeight':'inherit' }}  />
                        </Col>                     
                        <Col md={6}>
                           <h1>Analytics and Tracking</h1>
                            <p>Research & Development: Beyond software and IoT applications, T_U has started another division for>Starting with a Commitment to Clients: T_U focuses on a lot, and maintaining relationships</p>
                        </Col>
                    </Row>
                    
                    <Row style={{ 'padding':'20px 0', 'alignItems':'center' }}>
                        <Col md={6}>
                           <h1>Analytics and Tracking</h1>
                            <p>Research & Development: Beyond software and IoT applications, T_U has started another division for>Starting with a Commitment to Clients: T_U focuses on a lot, and maintaining relationships</p>
                        </Col>
                        <Col md={6}>
                                <img src="http://placehold.it/600x250" style={{ 'maxHeight':'inherit' }}  />
                        </Col> 
                    </Row>                    
                </div>
                
            </div>
        )
    }
}