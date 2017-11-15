import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './SplashFooter.scss'
export default class SplashFooter extends Component {
    
    render() {
        return(
            <div id="splash-footer">
           
                 <div className="footerContent">
                    <div className="navigation">
                        <div className="col">
                            <ul className="links">
                                <li><NavLink to="/blog">Tech Uncensored Blog</NavLink></li>                            
                                <li>Custom IoT Development</li>
                                <li>Custom Software Engineering</li>
                                <li>Education / Speaking Opportunities</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="contact">
                                <div><i className="fa fa-phone"></i> 215.515.8324</div>
                                <div><i className="fa fa-envelope"></i> staff@uncensored.tech</div>
                                <ul className="socials">
                                    <li><a href="https://www.twitter.com/tech_uncensored" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/techuncensored" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/tech_uncensored" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://www.snapchat.com/add/tech_uncensored" target="_blank"><i className="fa fa-snapchat"></i></a></li>
                                </ul>
                            </div>
                        </div>
                      
                    </div>
                    <div className="greybar"></div> 
                    <div className="ctaFooter">
                    Educating and making programming fun on our forever learning adventure. <br /> Covering all topics of programming & technology. Let's build a community of talent.
                    </div>
                 </div>
                   
            </div>
            )
        }
    
    }