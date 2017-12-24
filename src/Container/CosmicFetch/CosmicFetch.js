import React, { Component } from 'react'
import Cosmic from 'cosmicjs'
import config from '../Config/Config.js'

export default class CosmicFetch extends Component {
    constructor(state, props) {
        super(state, props);

        this.state = {
            bucket: []

        }


    }

    componentDidMount() {
        Cosmic.getObjects({ bucket: { slug: config.cosmic_slug, read_key: config.cosmic_readkey } }, (error, response) => {
            console.log('response:', response)
        });
    }

    render() {

        return (
            <div></div>
        )
    }
}
