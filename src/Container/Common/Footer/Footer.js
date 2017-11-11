import React, {Component} from "react";
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
        let speaks = ["Project Management","Programming","Software Design","Results","Success","Training","Consulting","Pair Programming","Tutorials","Internet of Things","Frameworks","Aliens","SEO"];
        if(num >= speaks.length)
            this.count = 0;
        el.innerHTML = speaks[this.count];
        el.setAttribute('data-num', this.count++);
        
    }

componentDidMount() {
     this.el = document.querySelector('footer .callout span');
    setInterval((() => this.speak(this.el, this.count)), 2000);
}
    render() {
        return (
            <footer>
                <div className="callout">
        <div className="label">WE SPEAK <span>Project Management</span></div>
    </div>
    <div id="social-wrapper">
        <ul>
            <a href="https://www.facebook.com/techuncensored/" target="_blank">
                <li className="facebook"></li>
            </a>
            <a href="https://www.twitter.com/tech_uncensored/" target="_blank">
                <li className="twitter"></li>
            </a>
            <a href="https://www.youtube.com/channel/UC44jpOmnvm-iTfkq-4Jj4CA" target="_blank">
                <li className="youtube"></li>
            </a>
            <a href="https://www.github.com/techuncensored/" target="_blank">
                <li className="github"></li>
            </a>
            <a href="mailto:uncensored@uncensored.tech">
                <li className="email"></li>
            </a>
        </ul>
        <div className="desc">
            Educating and making programming fun on our forever learning adventure. <br />
            Covering all topics of programming & technology. Let's build a community of talent.
        </div>
    </div>
            </footer>
        );
    }

}