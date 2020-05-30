import React, {Component} from 'react';
import './hamburger.scss';

class Hamburger extends Component {
    render() {
        const {handleHamburger} = this.props;
        return (
            <button type="button" onClick={handleHamburger} className="navbar-toggle css-hamburger js-hamburger" data-target="#exampleNavComponents">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </button>
        )
    }
}

export default Hamburger;