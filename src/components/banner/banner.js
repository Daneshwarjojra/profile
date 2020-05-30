import React, {Component} from 'react';
import './banner.scss';
import BannerContent from './bannerContent';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImg: '../images/truck-page-header.jpg'
    }
    this.resized = this.resized.bind(this);
  }

  resized() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      this.setState ({
        bannerImg: '../images/truck-header-mobile.jpg'
      });
    }
    else {
      this.setState ({
        bannerImg: '../images/truck-page-header.jpg'
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize',this.resized);
  }

  render() {
    return(
      <div className="bannerWrapper">
        <div className="bannerImgWrapper">
          <img src={this.state.bannerImg} className="w100" alt="Truck Banner" />
          <BannerContent />
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener('resize',this.resized);
  }
}

export default Banner;