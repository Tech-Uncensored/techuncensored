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

        return (
            <div id="subpage" className="container-fluid">
                
                <div className="row-wrapper">
                    <Row>
                       <Col sm={12} md={12}>
                             <h1>{this.props.page.title}</h1>
                              {
                              
                            this.props.page.metafields.filter((metaimg) => {
                                return metaimg.key.includes("service_block_");
                            }).slice(0,1).map( (pics, i) => (
                             <img key={i} className="service-img" src={pics.url} />
                            ))
                        }
                               <p className="open-text" dangerouslySetInnerHTML={{__html: this.props.page.content}}></p>
              
                       
                    </Col>
                    </Row>           
                   <br />
            {
                this.props.page.metafields.filter( (meta) => {
                    // filter for only service blocks
                   return meta.key.includes("service_block_");
                }).map( (block, i) => (
                    // service blocks
                    <Row key={i}>
                        <Col md={6} className={ (i % 2 === 1) ? "order-2" : ""}>
                            {this.props.page.metafields.filter((metaimage) => {
                                return metaimage.key.includes("service_image_");
                            }).slice(0,1).map((images,i) => (
                             <div className="mid-image">
                            <img src={images.url} />
                            </div>
                            ))
                           
                                
                            }
                        </Col>
                         <Col md={6}>
                            <h1>{block.title}</h1>
                                <p className="mid-text" dangerouslySetInnerHTML={{__html: block.value}}></p>
                        </Col>
                    </Row>
                ))
            }
                </div>
            
            </div>

        )
    }
}
