import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row, PageHeader, Jumbotron } from 'react-bootstrap'
import Footer from '../HomeSplash/HomeSplashFooter/HomeSplashFooter'
import './Skills.scss'

export default class Skills extends React.Component {
    constructor(props, state, next) {
        super(props, state, next);
        this.state = {

        }
    }
    render() {

        return (
            <div id="skills" className="container-fluid">
                <div className="skills-detail">
                <h1>{this.props.page.title}</h1>
                 {
                    this.props.page.metafields.filter((metaimg) => {
                        return metaimg.key.includes("skill_block_");
                    }).map((headerimg, i) => (
                    <Row key={i}>
                   
                    <img src={headerimg.url} style={{'width': '100%', 'height': '100%', 'margin':'1rem'}} />
                   
                    </Row>
                    ))
                }
                 <p className="open-text" dangerouslySetInnerHTML={{__html: this.props.page.content}}></p>
                 {
                    this.props.page.metafields.filter((met) => {
                        return met.key.includes("skill_block_");
                    }).slice(0,1).map((bloke, i) => (
                                 <Row key={i}>
                                    <Col sm={12} md={12}>
                                    <h1></h1>
                                   { /*  {
                                         this.props.page.metafields.filter((met) => {
                                             return met.key.includes("skill_image_header");
                                         }).map((images, i) => console.log(images) || (
                                               
                                       ))
                                     } */ }
                               
                                    </Col>
                                </Row>
                    ))
                }
                   
                  
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
                                        <p className="skills-text" dangerouslySetInnerHTML={{__html: blok.value}}></p>
                                    </Col>
                                    <Col md={6}>
                                            <img src={blok.url} style={{ 'maxHeight':'inherit' }}  />
                                    </Col> 
                                </Row>
                               
                    ))
                }
               
                </div>
            </div>
        )
    }
}
