import React, { Component } from 'react'
import Cosmic from 'cosmicjs'

import Footer from '../HomeSplash/HomeSplashFooter/HomeSplashFooter'
import Header from '../Common/Header/Header'
import './Blog.scss'

export default class Blog extends Component {

    constructor({ match }) {
        super()

        this.state = {
            entries: []
        };

        Array.prototype.getIndexBy = function(name, value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i][name] == value) {
                    return this[i];
                }
            }
            return -1;
        }
    }

    componentWillMount() {
        const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };
        Cosmic.getObjects({ bucket }, (function(err, res) {

            this.setState({
                entries: res.objects.type.posts
            });

        }).bind(this));
    }

    splitEntriesIntoArray(array) {
        if (!array.length)
            return [];

        let master = []; // master array containing arrays of objects
        master.push(array.splice(0, 3));
        return master.concat(this.splitEntriesIntoArray(array));
    }

    render() {

        let articleGroup = this.splitEntriesIntoArray(this.state.entries);
        let articles = articleGroup.map(function(collection) {
            return collection.map(function(collections, index) {
                let date = new Date(collections.created_at);

                return <div className="article" key={index}>
                            <div className="image"><img src={collections.metadata.hero.url} /></div>
                            <div className="content">
                                <div className="title"><a href={"/blog/"+collections.slug}>{collections.title}</a></div>
                                <div className="createdat">Published: {date.toLocaleString("en-us", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                <div className="excerpt" dangerouslySetInnerHTML={{__html: collections.metadata.teaser }} />
                            </div>
                        </div>
            })
        })

        return (
            <div>
                <div id="articles">
                    {articles}
                </div>
            </div>
        )
    }
}
