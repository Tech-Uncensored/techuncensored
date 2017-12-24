import React, { Component } from 'react'
import { NavLink } from 'react-router'
import { Col, Row, Button, Jumbotron, PageHeader } from 'react-bootstrap'
import './SubPage.scss'

export default class SubPage extends Component {
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
                        <Col md={6}>
                             <h1>{this.props.page.title}</h1>
                               <p className="open-text" dangerouslySetInnerHTML={{__html: this.props.page.content}}></p>
                        </Col>
                        <Col md={6}>
                            <div className="img-side"></div>
                        </Col>
                    </Row>           
                    <div className="whitespace"> </div>
            {
                this.props.page.metafields.filter( (meta) => {
                    // filter for only service blocks
                   return meta.key.includes("service_block_");
                }).map( (block, i) => (
                    // service blocks
                    <Row key={i}>
                        <Col md={6} className={ (i % 2 === 1) ? "order-2" : ""}>
                            <div className="mid-image"></div>
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
