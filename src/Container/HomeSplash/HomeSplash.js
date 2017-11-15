import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import SplashHeader from './HomeSplashHeader/HomeSplashHeader'
import SplashFooter from './HomeSplashFooter/HomeSplashFooter'

import './HomeSplash.scss'

export default class HomeSplash extends Component {
    
    render() {
        return(
            <div id="splash-wrapper">
                    <SplashHeader />
                    
                    <div className="center">
                        <h1>It's time to rethink your Escape Room.</h1>
                        <p id="headerDesc">All-in-one Solution for IoT Automation to ease your efforts. <br />Stop lettting other companies upsale bull$hit. Simplify your life.</p>
                    </div>
                    
                    <div id="ctaButtons" className="centerContent">
                        <div className="btn btn-white">Click For Consult</div>
                        <div className="btn">Open chat to speak with us</div>
                    </div>
                    
                    <div className="splashImage-wrap">
                        <img className="splashImage" src={require('../../public/images/rwd4png.png')}/>
                        
                    </div>
                    
                    <div className="container">
                        <h2 className="centerContent">Building Modern Responsive Software Solutions and Web Applications</h2>
                        <p>
                        Modern Technologies such as progressive web applications have been introduced into the industry even though 
                        few companies are utilizing what is soon to be standardized practice. Tech_Uncensored stays ahead of the curve 
                        by creating experiences that tackle the future.
                        <ul>
                        <li>Native Mobile Apps</li>
                        <li>Responsive Web Design with PWA</li>
                        <li>Integrated API's</li>
                        <li>Top Tier Performance testing</li>
                        </ul>
                        
                        </p>
                        <p>
                        Leading with future technologies is never enough if you can't find your audience. Using social media while embedding analytics 
                        will let you know all the data your team needs to project how to approach your future. Tech_Uncensored creates and maintains 
                        the platform needed for any custom solution.
                        </p>
                        
                        <h2 className="centerContent">How It Works</h2>
                        <p>There is no "sale's" team here to feed you buzz words about tech they've never touched. You will be welcomed by our top engineers to explain your situation so we can draw out a plan that suits you and your companies needs.</p>
                        <p> Every situation is different, but all solutions will be built with fast performing UI's using customized ReactJS components. </p>
                        <p> Database technology has improved tremendously, and we intend to use it! Your solution will dictate how we proceed with integrating your data for the fastest performance.</p>
                        <p>We handle all ranges of Software Development:</p>
                        <ul>
                            <li>Creative Consulting for current solutions to update</li>
                            <li>Unique </li>
                            <li>Custom Software Development</li>
                        </ul>
                        <p>Contact us and tell us a little about your project! We are looking forward to working with you to build your Custom Solution!</p>
                        
                    </div>
                    
                    <SplashFooter />
            </div>
            )
        }
    
    }