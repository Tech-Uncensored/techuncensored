import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row, PageHeader, Jumbotron } from 'react-bootstrap'
import Cosmic from 'cosmicjs'
import Service from '../Service/Service'
import Skills from '../Skills/Skills'
import ErrorPage from '../Error/Error'
import './Sample.scss'

export default class Sample extends Component {

    constructor() {
        super()
        this.state = {
            article: {},
            fourohfour: undefined
        }
    }

    componentDidMount() {
        const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };
        Cosmic.getObject({ bucket }, { slug: this.props.match.params.permalink }, ((err, res) => {
            this.setState({
                article: (res) ? res.object : this.state.article,
                fourohfour: (err || res.error) ? true : false
            });
        }).bind(this));
    }

    componentWillReceiveProps(next) {
        if (this.props.match.params.permalink !== next.match.params.permalink) {
            const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };
            Cosmic.getObject({ bucket }, { slug: next.match.params.permalink }, (function(err, res) {
                this.setState({
                    article: (res) ? res.object : this.state.article,
                    fourohfour: (err || res.error) ? true : false
                });
            }).bind(this));
        }
    }

    render() {
        if (this.state.fourohfour)
            return <ErrorPage />

        if (Object.keys(this.state.article).length === 0)
            return null

        return (this.state.article.metadata.menu == "Services") ? <Service {...this.props} page={this.state.article} /> : <Skills {...this.props} page={this.state.article} />

    }
}
