import React, {Component} from 'react';
import './navbar.scss';
import Hamburger from '../hamburger/hamburger';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.stickyNavbar = this.stickyNavbar.bind(this);
    this.hamburger = this.hamburger.bind(this);
  }

  stickyNavbar() {
    let windowScrollTop = document.documentElement.scrollTop;
    let navElement = document.getElementById('top-navbar');
    let navElementHeight = document.getElementById('top-navbar').clientHeight;
    if(windowScrollTop > navElementHeight && !navElement.classList.contains('nav-on-scroll')) {
      navElement.classList.add('nav-on-scroll');
    } else if (windowScrollTop < navElementHeight) {
      navElement.classList.remove('nav-on-scroll');
    }
  }

  hamburger = () => {
    let hamburgerElement = document.querySelector('.js-hamburger');
    let navBarElement = document.getElementById('exampleNavComponents');
    hamburgerElement.classList.toggle('change');
    navBarElement.classList.toggle('expandNavbar');
  }

  componentDidMount() {
    window.addEventListener('scroll',this.stickyNavbar);
  }

  render() {
    return(
      <nav id="top-navbar" className="topNavbar">
        <div className="container">
          <div className="responsive-navbar">
            <a href="/" className="brand-logo">TravelSite.com</a>
            <div className="navbar-search-wrapper">
              <input className="navbar-search" type="text" placeholder="Search" />
              <img className="nav-search-icon" alt="nav-search" src='https://ik.imagekit.io/loconavcovid19/search_xjdnQa3sy.svg'/>
            </div>
            <Hamburger handleHamburger={this.hamburger} />
            <div className="navbar-collapse" id="exampleNavComponents">
              <ul className="nav navbar-nav navbar-right menu-list">
                <li><a href="/"><img alt='Avatar' src='https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png'/>Sanjay Singh</a></li>
                <li><a href="/"><img className="feed-icon" src='https://ik.imagekit.io/loconavcovid19/wave_X93dbETN2A.svg' alt="feeds"/>Feeds</a></li>
                <li><a href="/"><img alt="comment" className="nav-icon" src="https://ik.imagekit.io/loconavcovid19/maps-and-location_0APjNha3S.svg"/></a></li>
                <li><a href="/"><img className="notification-icon" alt='bell' src='https://ik.imagekit.io/loconavcovid19/subscription_HsmUjVFwin.svg'/></a></li>
                <li><a href="/"><img className="setting-icon" alt="setting" src='https://ik.imagekit.io/loconavcovid19/action_CFLHoCe_L.svg'/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;