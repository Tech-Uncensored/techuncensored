import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import SplashHeader from './SplashHeader'
import SplashFooter from './SplashFooter'

import './Splash.scss'

export default class Splash extends Component {
    
    render() {
        return(
            <div>
                    <SplashHeader />
                    
                    <div className="center"  style={{ padding:'60px 0 20px 0' }}>
                        <h1>It's time to ditch Skype and TeamSpeak.</h1>
                        <p id="headerDesc">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. <br />Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
                    </div>
                    
                    <div id="ctaButtons" className="centerContent" style={{ padding:'20px 0' }}>
                        <div className="btn btn-white" style={{ marginRight:'30px' }}>Download for Windows</div>
                        <div className="btn">Open Discord in your browser</div>
                    </div>
                    
                    <div style={{ padding:'20px 0' }}>
                        <div id="splashImage" style={{ background:"url('https://www.placehold.it/1920x600')", width:'100%', height:'680px' }}></div>
                    </div>
                    
                    <div className="centerContent">
                        <div id="learnMoreBtn" className="btn">Learn More</div>
                    </div>
                    
                    <SplashFooter />
            </div>
            )
        }
    
    }