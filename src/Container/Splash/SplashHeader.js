import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './SplashHeader.scss'

export default class SplashHeader extends Component {
    
    render() {
        return(
     <header>
          <div id="logo">
            <ul id="topNav">
                <li><a>Escape Rooms</a></li>
                <li><a>How It Works</a></li>
                <li><a>Blog</a></li>
            </ul>
        </div>
        <div className="navigation">
        <ul id="social-nav">
        <li><a><i className="fa fa-instagram"></i></a></li>
        <li><a><i className="fa fa-facebook"></i></a></li>
        <li><a><i className="fa fa-snapchat"></i></a></li>
        </ul>
            <div className="phone">215.515.8324</div>
            <div className="menu"></div>
        </div>
    </header>
            )
        }
    
    }