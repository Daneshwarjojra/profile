import React, {Component} from 'react';

const reviewDetails = [
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    },
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    },
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    },
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    },
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    },
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    },
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    },
    {
        'url': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personname': 'mahek jain',
        'reviewername': 'recongo peo',
        'time': '2 months ago'
    }
]

class Reviewbar extends Component {
    render() {
        return (
            <div className="review-wrapper sideBox">
                <div className="review-title sideboxTitile">Popular reviews vy mahek jain</div>
                <div className="review-details sideboxDetails">
                    {
                        reviewDetails.map((item,i) => {
                            return (
                                <div key={i} className="review-rows sideboxRows">
                                    <img className="sideBox-avatar-icon" src={item.url} alt={item.personname + i}/>
                                    <div className="sideboxAvatar">
                                        <p className="mt0 mb0">{item.personname} reviewed by {item.reviewername}</p>
                                        <p className="mt0 mb0">{item.time}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Reviewbar;