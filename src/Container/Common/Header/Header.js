import React, { Component } from 'react'
import './Header.scss'
import { Row, Col } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import Cosmic from 'cosmicjs'
import { Route } from 'react-router-dom'

export default class Header extends Component {

    constructor(state, props) {
        super(state, props);

        this.state = {
            pages: []
        }

        this.headerStyle = {};
    }

    componentDidMount() {
        const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };
        Cosmic.getObjects({ bucket }, (function(err, res) {
            this.setState({
                pages: res.objects.type.pages
            });

        }).bind(this));
    }

    toggleMenu(e) {
        let event = e || window.event;

        let children = event.target.parentNode.getElementsByClassName('children')[0];

        children.style.display = (children.style.display == 'none') ? 'flex' : 'none';

        let myevent = function(e) {
            let isClickInside = children.parentNode.contains(e.target);

            if (!isClickInside && children.style.display != 'none') {
                children.style.display = 'none';
                this.removeEventListener('click', myevent);
            }

        };

        document.addEventListener('click', myevent);

    }

    render() {

        let headerStyle = {
            'height': (window.location.pathname.substr(1) == '') ? '800px' : '400px',
            'display': (window.location.pathname.substr(1) == '') ? '' : 'flex',
            'justifyContent': (window.location.pathname.substr(1) == '') ? '' : 'center',
            'alignItems': (window.location.pathname.substr(1) == '') ? '' : 'center'
        };

        return (
            <header style={headerStyle}>
            
                    <Route exact path='/' render={ props => (            
                        <video playsInline autoPlay muted loop poster="" id="bgvid">
                             { /* <source src="/techuncensored.webm" type="video/webm" /> */ }
                        </video>
                    ) } />
                    
                    <Route children = { props => (
                        <div className='header'>
                            <Link to='/'><div id="logo"></div></Link>
                            <nav className="nav">
                                <div className="item">
                                    <div className="parent" onClick={this.toggleMenu}>What We Do</div>
                                    
                                    <Row className="children" style={{ 'display':'none' }}>
                                        <Col md={3}>
                                            <div className="nav-section-title">Services</div>
                                                <ul className="nav-section-list">
                                                    {
                                                        this.state.pages.filter(function(page) {
                                                            return (page.metadata.menu == 'Services'); 
                                                        }).map(function(page,i) {
                                                            return <li key={i}><Link to={page.slug}>{page.title}</Link></li>
                                                        })
                                                    }
                                                </ul>
                                        </Col>
                                        
                                        <Col md={3}>
                                            <div className="nav-section-title">Highlighted Skills</div>
                                                <ul className="nav-section-list">
                                                    {
                                                        this.state.pages.filter(function(page) {
                                                            return (page.metadata.menu == 'Skills'); 
                                                        }).map(function(page,i) {
                                                            return <li key={i}><Link to={page.slug}>{page.title}</Link></li>
                                                        })
                                                    }
                                                </ul>
                                        </Col>
                                        
                                        <Col md={6}>
                                            <div className="row">
                                                <div className="col-md-12 showcase" style={{ height:'150px', background:"url('https://s3.us-east-2.amazonaws.com/tech-uncensored-assets/iot_raspberrypi_tech_uncensored.jpg') 0% 80%/cover" }}>
                                                    <div className="title">IOT Automation</div>
                                                </div>
                                                <div style={ {'padding':'20px 0', 'width':'100%' } }></div>
                                                <div className="col-md-5 showcase" style={{ height:'150px', background:"url('https://s3.us-east-2.amazonaws.com/tech-uncensored-assets/code_tech_uncensored.jpg') 0% 80%/cover" }}>
                                                    <div className="title">stuff</div>
                                                </div>
                                                <div className="col-md-5 offset-md-2 showcase" style={{ height:'150px', background:"url('https: //s3.us-east-2.amazonaws.com/tech-uncensored-assets/code_tech_uncensored.jpg') 0% 80%/cover') 0% 80%/cover" }}>
                                                    <div className="title">all the things</div>
                                                </div>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </div>
                                <div className="item">
                                    <div className="parent">
                                        <Link to="/work">Our Work</Link>
                                    </div>
                                </div>
                               <div className="item">
                                    <div className="parent">
                                        <Link to="/about">About Us</Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="parent">
                                        <Link to="/blog">Our Blog</Link>
                                    </div>
                                </div>
                                
                            </nav>
                            
                        </div>
                        )
                    }
                />
            
                <Route exact path = '/'render = {
                    props => (
                                <div id="banner-cta">
                                    <div className="title">Real Developers <span>No Bullshit</span></div>
                                    <div className="desc">All-in-one Solution for IoT Automation to ease your efforts. <br />Stop lettting other companies upsale bull$hit. Simplify your life.</div>
                                    <div className="btn">I need some text here</div>
                                </div>
                        )
                    }  /> 
            { (window.location.pathname != '/') ? <h1>Tech_Uncensored</h1> : null }
        </header>
        )
    }
}
