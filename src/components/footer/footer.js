import React, {Component} from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="copyRight">Copyright &copy; 2015 travelsite.com. All Rigts Reserved. 
                            <span className="footer-links">
                                <a href="/">Disclaimer</a> & 
                                <a href="/">Privacy Policy</a>
                            </span>
                        </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;