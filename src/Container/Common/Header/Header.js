import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Nav, NavItem, NavLink, Link, Image } from 'react-router-dom'
import Cosmic from 'cosmicjs'
import { Route } from 'react-router-dom'
import './Header.scss'

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

        let children = event.target.parentNode.parentNode.getElementsByClassName('children')[0];

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

    toggleSubMenu(e) {
        let event = e || window.event;
        let title = event.target.parentNode.getElementsByClassName('nav-section-list')[0];
        title.style.display = (title.style.display == 'none') ? 'block' : 'none';
    }

    render() {

        return (
            <header className={(window.location.pathname.substr(1) == '') ? 'homepage' : 'subpage'}>
                       
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
                                    <div className="parent" onClick={this.toggleMenu}>
                                        <i className="fa fa-bars"></i><span>What We Do</span>
                                    </div>
                                    
                                    <Row className="children" style={{ 'display':'none' }}>
                                        <Col sm={6} md={3}>
                                            <div className="nav-section-title" onClick={this.toggleSubMenu}>Services</div>
                                                <ul className="nav-section-list" style={{ 'display':'none' }}>
                                                {
                                                    this.state.pages.filter(function(page) {
                                                        return (page.metadata.menu == 'Services'); 
                                                    }).map(function(page,i) {
                                                        return <li key={i}><Link to={page.slug}>{page.title}</Link></li>
                                                    })
                                                }
                                                </ul>
                                        </Col>
                                        
                                        <Col sm={6} md={3}>
                                            <div className="nav-section-title" onClick={this.toggleSubMenu}>Highlighted Skills</div>
                                                <ul className="nav-section-list" style={{ 'display':'none' }}>
                                                    {
                                                        this.state.pages.filter(function(page) {
                                                            return (page.metadata.menu == 'Skills'); 
                                                        }).map(function(page,i) {
                                                            return <li key={i}><Link to={page.slug}>{page.title}</Link></li>
                                                        })
                                                    }
                                                </ul>
                                        </Col>
                                        
                                        <Col sm={12} md={6}>
                                            <div className="row">
                                                <div className="col-md-12 showcase one">
                                                
                                                    <div className="title">IOT Automation</div>
                                                </div>
                                               
                                                <div className="col-md-5 showcase two">
                                                    <div className="title">stuff</div>
                                                </div>
                                                <div className="col-md-5 offset-md-2 showcase three">
                                                    <div className="title">all the things</div>
                                                </div>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </div>
                                <div className="item">
                                    <div className="parent">
                                        <Link className="work" to="/work">
                                        <i className="fa fa-briefcase"></i><span>Our Work</span>
                                        </Link>
                                    </div>
                                </div>
                               <div className="item ">
                                    <div className="parent">
                                        <Link className="work" to="/about">
                                        <i className="fa fa-info-circle"></i><span>About Us</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="parent">
                                        <Link className="work" to="/blog">
                                        <i className="fa fa-code"></i><span>Our Blog</span>
                                        </Link>
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
                                   <div className="btn-wrap">
                                        <div className="btn">
                                            CALL: 215-515-8324
                                            <a href="tel:+1215515832"></a>
                                        </div>
                                        <div className="btn" onClick={  () => { Tawk_API.maximize(); } }>CHAT NOW</div> 
                                    </div>
                                    <div className="overlay"></div>
                                </div>
                        )
                    }  /> 
            { (window.location.pathname != '/') ? <h1>Tech_Uncensored</h1> : <h1>Tech_Uncensored</h1> }
            
        </header>
        )
    }
}
