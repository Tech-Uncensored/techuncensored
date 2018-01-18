import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row, Button, Jumbotron, PageHeader } from 'react-bootstrap'
import './SubPage.scss'

export default class Service extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        let imgUrls = [];
        return (
            <div id="subpage" className="container-fluid">
                
                <div className="row-wrapper">
                    <Row>
                       <Col sm={12} md={12}>
                            <h1>{this.props.page.title}</h1>
                             {
  
                                this.props.page.metafields.filter((metaimg) => {
                                    return metaimg.key.includes("service_hero_");
                                }).slice(0,1).map( (pics, i) => (
                                 <img key={i} className="service-img" src={pics.url} />
                                ))
                            }
                            <p className="open-text" dangerouslySetInnerHTML={{__html: this.props.page.content}}></p>
                        </Col>
                    </Row>           
                    
                   <br />

                    {
                        this.props.page.metafields.filter( (metatext) => {
                            if( metatext.key.includes("service_image_") )
                            {
                                let index = metatext.key.split("_")[2];
                                imgUrls[index] = metatext.url; 
                                console.log(imgUrls)
                            }
                            return metatext.key.includes("service_block_");
                      }).map( (block, i) =>  ( 
                         <Row key={i}>
                            <Col md={6} className={(i % 2 === 1) ? "order-2" : "" }>
                                <h1>{block.title}</h1>
                                <p className="mid-text" dangerouslySetInnerHTML={{__html: block.value}}></p>
                            </Col>
                            <Col md={6}>
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
