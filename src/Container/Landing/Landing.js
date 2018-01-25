import React, { Component } from 'react'
import './Landing.scss'

export default class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="split left">
                <h1>The Designer</h1>
                <div className="button">Read More</div>
            </div>
            <div className="split right">
                <h1>The Programmer</h1>
                <div className="button">Read More</div>
            </div>
        </div>
        )
    }
}
