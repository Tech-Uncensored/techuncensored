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
                        <h2 className="centerContent">Build A Generation III Escape Room</h2>
                        <p>Third generation escape rooms bring a dynamic experience to players far beyond possible in previous generations. 
                        These modern Escape Rooms can run fully automated once started, advancing the game, delivering clues, and engaging players 
                        all without a dedicated game master. Players have come to expect the highest quality experience that requires interactive props, 
                        real-time feedback, with total emersion.</p>
                        <p>Our professional engineers develop custom third generation escape room props perfect for any room and to fit any theme. 
                        Get started today building your third-generation escape room experience with IoT automation! </p>
                        
                        <h2 className="centerContent">How It Works</h2>
                        <p>IoT automation utilizes programmable microcomputers to control or automate props based upon one or multiple inputs. This allows rooms to run from start to finish autonomously, progressing the game forward at will. Rooms may be fully automated or partially automated, requiring limited input from the game master or limited analog props. </p>
                        <p>In fully automated rooms, software and sensors placed throughout the room enable the room to run itself from start to finish. This also allows a higher quality, more engaging experience for players. Swap shackle locks out for RFID or Bluetooth enabled locks, utilize audio or vibration sensors to activate clues, create interactive experiences through prop cell phones, tablets, or computers.</p>
                        <p>Never miss a player ask for a clue or struggle with a combination lock again!</p>
                        <p>There are a variety of ways we can help you deliver an exceptional experience for your players. </p>
                        <ul>
                            <li>Escape Room Prop Consulting</li>
                            <li>Custom Escape Room Prop Development</li>
                            <li>Custom Software Development</li>
                        </ul>
                        <p>Contact us and tell us a little about your project! We are looking forward to working with you to build your high-tech generation III Escape Room!</p>
                        
                    </div>
                    
                    <SplashFooter />
            </div>
            )
        }
    
    }