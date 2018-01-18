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
        let imgUrls = [];
        return (
            <div id="skills" className="container-fluid">
                <div className="row-wrapper">
                    <Row>
                       <Col sm={12} md={12}>
                            <h1>{this.props.page.title}</h1>
                             {
  
                                this.props.page.metafields.filter((metaimg) => {
                                    return metaimg.key.includes("skill_hero_");
                                }).map( (pics, i) => (
                                 <img key={i} className="skill-img" src={pics.url} />
                                ))
                            }
                            <p className="open-text" dangerouslySetInnerHTML={{__html: this.props.page.content}}></p>
                        </Col>
                    </Row>           
                    
                   <br />
                        {
                            this.props.page.metafields.filter( (metatext) => {
                                if( metatext.key.includes("skill_image_") )
                                {
                                    let index = metatext.key.split("_")[2];
                                    imgUrls[index] = metatext.url; 
                                }
                                return metatext.key.includes("skill_block_");
                          }).map( (block, i) =>  ( 
                             <Row key={i}>
                                <Col sm={12} md={6} className={(i % 2 === 1) ? "order-2" : "" }>
                                    <h1>{block.title}</h1>
                                    <p className="mid-text" dangerouslySetInnerHTML={{__html: block.value}}></p>
                                </Col>
                                <Col sm={12} md={6}>
                                    <img src={imgUrls[block.key.split("_")[2]]} />
                                </Col>
                             </Row>
                          ))
                        }
                </div>
            </div>





        )
    }
}
