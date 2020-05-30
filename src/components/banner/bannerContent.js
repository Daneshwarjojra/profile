import React,{ Component } from 'react';
import './bannerContent.scss';

class BannerContent extends Component {
  render() {
    return(
      <div className="banner-content">
        <div className="container">
          <div className="row">
            <div className="col-md-2 mt20 tc">
              <img className="avatar-icon" src='https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png' alt='Profile-Avatar' />
            </div>
            <div className="col-md-7">
              <h1 className="banner-heading">Mahek Jain
                <button type="button" className="btn_very_small__filled ml20">Follow</button>
              </h1>
              <p className="banner-tag-line">New Delhi, India</p>
              <p className="banner-tag-line">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <ul className="profile-status">
                <li><img alt="Wishlist" className="parofile-action-icon" src='https://ik.imagekit.io/loconavcovid19/list_l9fniocdN1.svg'/>Wishlist (10)</li>
                <li><img alt="Buddy" className="parofile-action-icon" src="https://ik.imagekit.io/loconavcovid19/smile_qVIp2jLBpa.svg"/>Buddy List (10)</li>
                <li><img alt="Following" className="parofile-action-icon" src='https://ik.imagekit.io/loconavcovid19/team_H6gy6ZQxX.svg'/>Following (20)</li>
                <li><img alt="Followers" className="parofile-action-icon" src='https://ik.imagekit.io/loconavcovid19/team_H6gy6ZQxX.svg'/>Followers (125)</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h1 className="banner-heading mb10">Rank: #45</h1>
              <div className='progress-wrapper'>
                <img className='report-icon' src='https://ik.imagekit.io/loconavcovid19/report_czEyZyo2oL.svg' alt='report' />
                <div className="meter">
                  <span style={{width:'80%'}}><span className="progress"></span></span>
                </div>
              </div>
              <div className="social-icons-wrapper">
                <a href="/"><img alt='fb' className='social-icon' src='https://ik.imagekit.io/loconavcovid19/facebook_QDyDQmO2GZ.svg'/></a>
                <a href="/"><img alt='tw' className='social-icon' src='https://ik.imagekit.io/loconavcovid19/twitter_4tkK1n50TG.svg'/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerContent;