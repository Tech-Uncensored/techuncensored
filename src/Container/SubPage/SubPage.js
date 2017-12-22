import React, { Component } from 'react'
import { NavLink } from 'react-router'
import { Col, Row, Button, Jumbotron, PageHeader } from 'react-bootstrap'
import './SubPage.scss'

export default class SubPage extends Component {

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

            <div id="subpage" className="container-fluid">
                <Row>
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
                         </div>
                            <div className="whitespace"></div>
                </Row>
                <div className="row-wrapper">
                <Row>
                    <Col md={6}>
                     <h1>Responsive Design</h1>
                       <p className="open-text">
                           High performing, mobile-ready web applications. High performing, mobile-ready web applications.               High performing, mobile-ready High performing, mobile-ready web applications. High performing, mobile-ready web applications.
                      </p>
                 </Col>
                 <Col md={6}>
                    <div class="img-side"></div>
                 </Col>
            </Row>
            <div className="whitespace"> </div>
            <Row>
            <Col md={6}>
            <div className="mid-image"></div>
            </Col>
             <Col md={6}>
                <h1>SEO</h1>
                        <p className="mid-text">
                                Tech_Uncensored Education: Noticing a lack of training and education for anyone attending school, T_U started making an effort to teach future developers new best practices for building software applications. After finding out how far behind the system is, they progressed by opening online groups to join and help anyone advance in their career. T_U mentors some people, and speaks at schools of all ages.
                        </p>
            </Col>
            </Row>
             <div className="whitespace"></div>
            <Row>
           
            <Col md={6}>
            <p className="rd-text">
           <h1>Analytics and Tracking</h1>
            Research & Development: Beyond software and IoT applications, T_U has started another division for>Starting with a Commitment to Clients: T_U focuses on a lot, and maintaining relationships 
            </p>
            </Col>
             <Col md={6}>
            <div className="rd-img"> </div>
            </Col>
            </Row>
            </div>
             <div className="whitespace"></div>
            <Row>
            <Col>
            <div className="bottom">
           <Button>Click Here for Details</Button>
            </div>
          
            </Col>
            </Row>
            </div>
        )
    }
}
