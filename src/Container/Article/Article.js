import React, { Component } from 'react'
import Cosmic from 'cosmicjs'

import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import './Article.scss'

export default class Article extends Component {

    constructor({ match }) {
        super()
        this.state = {
            article: []
        }
    }

    componentDidMount() {

        const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };
        Cosmic.getObject({ bucket }, { slug: this.props.match.params.permalink }, (function(err, res) {

            this.setState({
                article: res.object
            });

        }).bind(this));

    }

    render() {
        console.log(this.state.article);
        let date = new Date(this.state.article.created_at);

        if (this.state.article.length == 0)
            return <div></div>

        return (
            <div>
                <div id="article">
                    <div className="video">
                        <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+this.state.article.metadata.video_id} frameBorder="0" allowFullScreen="" kwframeid="1"></iframe>
                    </div>
                    <div className="title">{this.state.article.title}</div>
                    <div className="content" dangerouslySetInnerHTML={{__html: this.state.article.content }} />
                    <div className="createdat">Published: {date.toLocaleString("en-us", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
            </div>
        )
    }
}
