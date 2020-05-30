import React, {Component} from 'react';

const tripsDetails = [
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

class TripsBar extends Component {
    render() {
        return (
            <div className="trip-wrapper sideBox">
                <div className="trip-title sideboxTitile">Popular trips by mahek jain</div>
                <div className="trip-details sideboxDetails">
                    {
                        tripsDetails.map((item,i) => {
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

export default TripsBar;