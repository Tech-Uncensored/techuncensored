import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import './HomeSplashFooter.scss'

export default class HomeSplashFooter extends Component {
    
    render() {
        return(
            <div id="homesplash-footer">
           
                 <div className="footerContent">
                    <div className="navigation">
                        <div className="col">
                            <ul>
                                <li>Tech Uncensored Blog</li>                            
                                <li>Custom IoT Development</li>
                                <li>Custom Software Engineering</li>
                                <li>Education / Speaking Opportunities</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>Twitter</li>
                                <li>Snapchat</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>Twitter</li>
                                <li>Snapchat</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
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