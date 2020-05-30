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
                handleClick(this);
            }, false);
        }

        function handleClick(object) {
            let container = object.getElementsByClassName('readMoreText')[0];
            if (container !== undefined) {
                if (container.classList.contains('active')) {
                    let currentParent = container.parentElement;
                    currentParent.parentElement.querySelector('.js-extend').classList.remove('fullNote');
                    container.innerText = 'Read More';
                    container.classList.remove('active');
                }else{
                    let currentParent = container.parentElement;
                    currentParent.parentElement.querySelector('.js-extend').classList.add('fullNote');
                    container.innerText = 'Read Less';
                    container.classList.add('active');
                } 
            }
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