// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Button, Col, Row, PageHeader, Jumbotron } from 'react-bootstrap'
// import './ApiWrapper.scss'

// export default class ApiWrapper extends Component {
//     constructor(props) {
//         super(props);

//         this.state= {

//         }
//     }

//     componentDidMount() {
//         const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };

//         Cosmic.getObject({ bucket }, { slug: this.props.match.params.permalink }, ((err, res) => {
//             this.setState({
//                 article: (res.object) ? res.object : { object: {} },
//                 fourohfour: (err) ? true : false
//             });
//     }

//         render() {
//             return (
//                   <div className="container-fluid">

//                   </div> 
//             )
//         }
//     }
