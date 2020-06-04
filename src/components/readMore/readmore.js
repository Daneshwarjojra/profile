import React, { Component } from 'react';
import './readmore.scss';

class ReadMore extends Component {
    constructor(props) {
        super(props);
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    handleReadMore = () => {
        let readmoreElement = document.querySelectorAll('.read-more');
        for (let i = 0; i < readmoreElement.length; i++) {
            readmoreElement[i].addEventListener('click', function () {
                let childElem = this.querySelector('.readMoreText');
                let container = document.querySelectorAll('.readMoreText');
                for (let x = 0; x< container.length; x++) {
                    let currentParent = childElem.parentElement;
                    childElem.innerText = '';  
                    currentParent.parentElement.querySelector('.js-extend').classList.add('fullNote');
                }
            }, false);
        }
    }

    componentDidMount() {
        this.handleReadMore();
    }
 
    render() {
        return (
            <span className="read-more"><span className="readMoreText">Read More</span></span>
        )
    }
}

export default ReadMore;