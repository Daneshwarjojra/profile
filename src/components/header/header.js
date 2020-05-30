import React, {Component} from 'react';
import './header.scss';
import Banner from '../../components/banner/banner';

class Header extends Component {
  render() {
    return (
      <header className="banner">
        <Banner />
      </header>
    );
  }
}

export default Header;