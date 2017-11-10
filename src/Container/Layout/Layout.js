import React from 'react'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'



export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                    
                <Footer />
            </div>
        );
    }

}
