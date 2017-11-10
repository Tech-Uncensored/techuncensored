import React, {Component} from "react";
import { Col, Row, Grid } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard';
import Cosmic from 'cosmicjs';
import { NavLink } from 'react-router-dom';
import './Homepage.scss'

const EntryItem = () => (
            <div className="col-sm-4" >
                <PostCard title={this.props.entry.title}
                date={this.props.entry.pubdata}
                post={this.props.entry.content}
                video={this.props.entry.video}
                image={this.props.entry.metafields.getIndexBy("key", "hero")}
                /> 
                </div>
);

export default class Homepage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            entries: []
        };

        const bucket = { slug: 'tech-uncensoredtech', read_key: 'i2ZrFQ3ZtEnFY6wkYgggntoxtSliOav9Wny6s3b0u5bp2S5rTd' };
        Cosmic.getObjects({ bucket }, (function(err, res) {
            
            this.setState({
                entries: res.objects.type.posts
            });
           
        }).bind(this));
       
        /*
                let myData = this.requestData("http://localhost:8090/data/blogs", function (data) {
                    return JSON.parse(data);
                });

                myData.then((function (react, blogData) {
                    react.setState({
                        entries: blogData
                    });
                }).bind(null, this));
        */
        Array.prototype.getIndexBy = function (name, value) {
            for (var i = 0; i < this.length; i++) {
                if (this[i][name] == value) {
                    return this[i];
                }
            }
            return -1;
        }
    }

    requestData(url, callback, type = "GET", data = {}, context = this) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            let response = null;
            let params = JSON.stringify(data);

            xhr.onload = function () {

                resolve(callback(this.responseText));
            };

            if (type == "GET") {
                xhr.open("GET", url, true);
                xhr.send();
            } else if (type == "POST") {
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(params);
            }
        });
    }

    splitEntriesIntoArray(array) {
        if (!array.length)
            return [];

        var master = []; // master array containing arrays of objects
        master.push(array.splice(0, 3));
        return master.concat(this.splitEntriesIntoArray(array));
    }

    render() {
        var x = this.splitEntriesIntoArray(this.state.entries);

        var rows = x.map(function (collection) {
         return collection.map(function(collections) {
                return <PostCard title={collections.title}
                        date={collections.pubdata}
                        post={collections.content}
                        video={collections.video}
                        image={collections.metafields.getIndexBy("key", "hero")}
                        />
            })

        });


     return (
      
        <div>
        <div id="homepage-banner">
  
            <div id="banner-cta">
        TECH_UNCENSORED
            </div>
        </div>

    <div id="main-content">
        Tech_Uncensored offers a unique approach to software development consulting and technology education. <br />
        We provide the knowledge and experience your project needs to be successful by pulling back the magic
        curtain <br />in software development.
    <div className="btn large">Read More</div>
    </div>

    <div className="cards clearfix">
       {rows}
    </div>
            <div className="btn large">Load More</div>

     <div id="highlights">
        <div className="item consulting">
            <h2>Software Consulting</h2>
            <div className="desc">Some call to action<br />about clients here</div>
        </div>
        <div className="item education">
            <h2>Technology Education</h2>
            <div className="desc">Some call to action<br />about students here</div>
        </div>
      </div>



        </div>
        
     );

    }
}