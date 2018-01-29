import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Landing.scss'

export default class Landing extends Component {
    render() {
        return <div className="landing">
            <div className="split left">
              <Link to="/splash" className="button">
                Read More
              </Link>
            </div>
            <h1>IoT</h1>
            <div className="split middle">
              <h1>Home</h1>
              <Link to="/home" className="button">
                Read More
              </Link>
            </div>
            <div className="split right">
              <h1>Software</h1>
              <Link to="/home" className="button">
                Read More
              </Link>
            </div>
          </div>
    }
}
