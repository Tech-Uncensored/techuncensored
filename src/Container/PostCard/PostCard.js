import React, {Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
content : {
    top             : '0',
    left            : '0',
    right           : '0',
    bottom          : '0',
    background      : 'rgba(255,255,255,0.4)',
    width           : '75%',
    margin          : 'auto',
    padding         : 0,
    MozTransition   : 'top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, display: 0.3s',
    WebkitTransition: 'top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, display: 0.3s',
    transition      : 'top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, display: 0.3s'
}
};


export default class PostCard extends Component {
   constructor() {
       super();
       this.state = { modalIsOpen: false };
   }
  
   openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      //this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

  render() {

      let excerpt = (this.props.post) ? this.props.post.substring(0,50) : "";

      let displayVideo = (function() {
          if(this.props.video)
              return '<div class="modal-video"><iframe width="1000" height="563" src="https://www.youtube.com/embed/"'+this.props.video+'"?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>';
          else return '';
      }).bind(this);

      return(

      <div>
          <div className="card">
              <div className="card-image">
                  <img src={this.props.image.url}/>
              </div>
              <div className="card-content">
                  <span className="card-title">{this.props.title}</span>
                  <p dangerouslySetInnerHTML={{__html: excerpt }} />
              </div>
              <div className="card-action">
                  <a onClick={this.openModal.bind(this)}>
                      Read More
                  </a>
                  <div className="postDate">
                      {this.props.date}
                  </div>

              </div>
          </div>


       <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
       >

            <div className="modal-content">
                <h2 className="modal-title" ref="subtitle">{this.props.title}</h2>
                <div className="modal-excerpt">Excerpt</div>
                <div dangerouslySetInnerHTML={{__html: displayVideo()}} />
                <div className="modal-body" dangerouslySetInnerHTML={{__html: this.props.post }} />
                <div className="modal-close" onClick={this.closeModal.bind(this)}>X</div>
            </div>


       </Modal>
     </div>
   );
 }
}