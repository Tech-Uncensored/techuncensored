import React, { Component } from 'react'
import Cosmic from 'cosmicjs'
import config from '../Config/Config.js'

export default class CosmicFetch extends Component {
    constructor() {
        super()
        this.state = {
            article: {},
            pages: [],
            posts: []
        }
    }

    componentDidMount() {
        const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };
        Cosmic.getObject({ bucket }, { slug: this.props.match.params.permalink }, ((err, res) => {
            this.setState({
                pages: this.state.pages,
                posts: this.state.posts
            });
        }).bind(this));
    }

    render() {

        return (
            <div>hi</div>
        )
    }
}
