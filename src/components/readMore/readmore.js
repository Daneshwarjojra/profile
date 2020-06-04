import React, { Component } from 'react';
import './readmore.scss';

class ReadMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            setClassName: '',
        }
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    handleReadMore = (e) => {
        this.setState(state => ({
            toggle: !state.toggle,
            setClassName: 'fullNote'
        }));
        e.target.parentElement.parentElement.querySelector('.js-extend').classList.toggle('fullNote');
    }
 
    render() {
        const {toggle} = this.state;
        if (!toggle) {
            return <span className="read-more" onClick={this.handleReadMore} singleDisplay={toggle? 'false': 'true'}><span className="readMoreText">Read More</span></span>
        } else {
            return <span className="read-more" onClick={this.handleReadMore} singleDisplay={toggle? 'false': 'true'}><span className="readMoreText">Read Less</span></span>
        }
    }
}

export default ReadMore;
