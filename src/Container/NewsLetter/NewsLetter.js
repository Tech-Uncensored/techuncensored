import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './NewsLetter.scss'


export default class NewsLetter extends Component {
    constructor(props) {
        super(props);

    }

    subscribe(event) {
        if (event.keyCode !== 13)
            return;

        // validate email
        let email = document.getElementById("newsletter_signup");
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            console.log('invalid email');
            return;
        }

        // push email to Drip
        _dcq.push(["identify", {
            email: email.value,
            tags: ["Newsletter", "Homepage"]
        }]);

        email.value = "";
        email.placeholder = "Subscribed. Thank You.";
        email.blur();
    }

    render() {
        return (
            <div id="newsletter" className="container-fluid callout ptb50">
                        <div className="container">
                            <Row className="text-center font-large">
                                <Col md={6} sm={12} className="cta fwl ffr">
                                    Join our newsletter for awesome news and updates      
                                </Col>
                                <Col md={5} lg={4} mdOffset={1} sm={12} className="offset-lg-2">
                                    <input id="newsletter_signup" type="text" placeholder="email@domain.com" onKeyUp={this.subscribe} />
                                </Col> 
                            </Row>                
                        </div>
                     </div>
        )
    }
}
