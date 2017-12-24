import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row, PageHeader, Jumbotron } from 'react-bootstrap'
import Footer from '../HomeSplash/HomeSplashFooter/HomeSplashFooter'
import './Skills.scss'

export default class Sample extends React.Component {

    render() {
        return (
            <div id="skills">
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
                {
                    this.props.page.metafields.filter((met) => {
                        return met.key.includes("skill_block_");
                    }).map((blok, i) => (
                                 <Row key={i} style={{ 'padding':'20px 0', 'alignItems':'center' }}>
                                    <Col md={6} className={(i % 2 === 1) ? "order-2" : "" }>
                                       <h1>{blok.title}</h1>
                                        <p dangerouslySetInnerHTML={{__html: blok.value}}></p>
                                    </Col>
                                    <Col md={6}>
                                            <img src="http://placehold.it/600x250" style={{ 'maxHeight':'inherit' }}  />
                                    </Col> 
                                </Row>
                    ))
                }
                </div>
            </div>
        )
    }
}
