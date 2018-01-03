import React, { Component } from "react";
import NewsLetter from '../../NewsLetter/NewsLetter'
import './Footer.scss'

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.count = 0;
        this.el;

    }

    speak(el, num) {
        let speaks = ["Project Mgmt", "Programming", "Software Design", "Results", "Success", "Training", "Consulting", "Tutorials", "IoT", "Frameworks", "Aliens", "SEO", "Security"];
        if (num >= speaks.length)
            this.count = 0;
        el.innerHTML = speaks[this.count];
        el.setAttribute('data-num', this.count++);
    }

    componentDidMount() {
        this.el = document.querySelector('footer .wespeak span');
        setInterval((() => this.speak(this.el, this.count)), 2000);
    }


    render() {

        return (


            <footer>
                <div className="wespeak">
                    <div className="label">WE SPEAK <span>Project Management</span></div>
                </div>
                <div id="social-wrapper">
                    <div className="social">
                        <div className="facebook"><a href="https://www.facebook.com/techuncensored/" target="_blank"></a></div>
                        <div className="twitter"><a href="https://www.twitter.com/tech_uncensored/" target="_blank"></a></div>
                        <div className="youtube"><a href="https://www.youtube.com/channel/UC44jpOmnvm-iTfkq-4Jj4CA" target="_blank"></a></div>
                        <div className="github"><a href="https://www.github.com/techuncensored/" target="_blank"></a></div>
                        <div className="email"><a href="mailto:uncensored@uncensored.tech"></a></div>
                    </div>
                    <div className="desc">
                        Educating and making programming fun on our forever learning adventure. <br />
                        Covering all topics of programming & technology. Let's build a community of talent.
                    </div>
                </div>
            </footer>

        );
    }

}
