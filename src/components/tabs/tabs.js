import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabs.scss';
import ReadMore from '../readMore/readmore';
import Counter from '../counter/counter';

const TabContent = [
    {
        'Title':'Journey',
        'comment': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        'src': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personName': 'Mahek Jain',
        'reviewerName': 'Recong Peo',
        'time': '2 months ago',
        'src2': 'https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png'
    },
    {
        'Title':'Reviews',
        'comment': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        'src': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personName': 'Mahek Jain',
        'reviewerName': 'Recong Peo',
        'time': '2 months ago',
        'src2': 'https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png'
    },
    {
        'Title':'Photos',
        'comment': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        'src': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personName': 'Mahek Jain',
        'reviewerName': 'Recong Peo',
        'time': '2 months ago',
        'src2': 'https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png'
    },
    {
        'Title':'Trips',
        'comment': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        'src': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personName': 'Mahek Jain',
        'reviewerName': 'Recong Peo',
        'time': '2 months ago',
        'src2': 'https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png'
    },
    {
        'Title':'Stats',
        'comment': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        'src': 'https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png',
        'personName': 'Mahek Jain',
        'reviewerName': 'Recong Peo',
        'time': '2 months ago',
        'src2': 'https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png'
    }
]

class ProfileTabs extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                {
                    TabContent.map((content,index) => {
                        return (
                            <Tab data-value={content.Title} key={index}>{content.Title}</Tab>
                        )
                    })
                }
                </TabList>
                
                <TabPanel>
                {
                    TabContent.map((content,i) => {
                        return (
                            <div className="main-content-wrapper">
                                <h2 className="fwB">Journey</h2>
                                <div key={i} className="comment-box-wrapper">
                                    <div className="profile-user clearfix">
                                        <div className="col-md-2 col-xs-4 tl">
                                            <img className="profile-user-icon" src={content.src} alt={content.Title + i} />
                                        </div>
                                        <div className="col-md-10 col-xs-8">
                                            <p className="comment-person-name">{content.personName}</p>
                                            <p className="comment-reviewer">Reviewd {content.reviewerName}</p>
                                        </div>
                                    </div>
                                    <p className="comment-time pl15">{content.time}</p>
                                    <div className="previous-images">
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                    </div>
                                    <div className="comment-box js-parentHandle">
                                        <p className="js-extend shortNote">{content.comment}</p>
                                        <ReadMore />
                                        <Counter/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </TabPanel>

                <TabPanel>
                {
                    TabContent.map((content,i) => {
                        return (
                            <div className="main-content-wrapper">
                                <h2 className="fwB">Reviews</h2>
                                <div key={i} className="comment-box-wrapper">
                                    <div className="profile-user clearfix">
                                        <div className="col-md-2 col-xs-4 tl">
                                            <img className="profile-user-icon" src={content.src} alt={content.Title + i} />
                                        </div>
                                        <div className="col-md-10 col-xs-8">
                                            <p className="comment-person-name">{content.personName}</p>
                                            <p className="comment-reviewer">Reviewd {content.reviewerName}</p>
                                        </div>
                                    </div>
                                    <p className="comment-time pl15">{content.time}</p>
                                    <div className="previous-images">
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                    </div>
                                    <div className="comment-box js-parentHandle">
                                        <p className="js-extend shortNote">{content.comment}</p>
                                        <ReadMore />
                                        <Counter/>
                                    </div>
                                </div>
                            </div>                       )
                    })
                }
                </TabPanel>

                <TabPanel>
                {
                    TabContent.map((content,i) => {
                        return (
                            <div className="main-content-wrapper">
                                <h2 className="fwB">Photos</h2>
                                <div key={i} className="comment-box-wrapper">
                                    <div className="profile-user clearfix">
                                        <div className="col-md-2 col-xs-4 tl">
                                            <img className="profile-user-icon" src={content.src} alt={content.Title + i} />
                                        </div>
                                        <div className="col-md-10 col-xs-8">
                                            <p className="comment-person-name">{content.personName}</p>
                                            <p className="comment-reviewer">Reviewd {content.reviewerName}</p>
                                        </div>
                                    </div>
                                    <p className="comment-time pl15">{content.time}</p>
                                    <div className="previous-images">
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                    </div>
                                    <div className="comment-box js-parentHandle">
                                        <p className="js-extend shortNote">{content.comment}</p>
                                        <ReadMore />
                                        <Counter/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </TabPanel>

                <TabPanel>
                {
                    TabContent.map((content,i) => {
                        return (
                            <div className="main-content-wrapper">
                                <h2 className="fwB">Trips</h2>
                                <div key={i} className="comment-box-wrapper">
                                    <div className="profile-user clearfix">
                                        <div className="col-md-2 col-xs-4 tl">
                                            <img className="profile-user-icon" src={content.src} alt={content.Title + i} />
                                        </div>
                                        <div className="col-md-10 col-xs-8">
                                            <p className="comment-person-name">{content.personName}</p>
                                            <p className="comment-reviewer">Reviewd {content.reviewerName}</p>
                                        </div>
                                    </div>
                                    <p className="comment-time pl15">{content.time}</p>
                                    <div className="previous-images">
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                    </div>
                                    <div className="comment-box js-parentHandle">
                                        <p className="js-extend shortNote">{content.comment}</p>
                                        <ReadMore />
                                        <Counter/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </TabPanel>

                <TabPanel>
                {
                    TabContent.map((content,i) => {
                        return (
                            <div className="main-content-wrapper">
                                <h2 className="fwB">Stats</h2>
                                <div key={i} className="comment-box-wrapper">
                                    <div className="profile-user clearfix">
                                        <div className="col-md-2 col-xs-4 tl">
                                            <img className="profile-user-icon" src={content.src} alt={content.Title + i} />
                                        </div>
                                        <div className="col-md-10 col-xs-8">
                                            <p className="comment-person-name">{content.personName}</p>
                                            <p className="comment-reviewer">Reviewd {content.reviewerName}</p>
                                        </div>
                                    </div>
                                    <p className="comment-time pl15">{content.time}</p>
                                    <div className="previous-images">
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                        <img className="previous-images-icons" src={content.src2} alt={content.Title + i} />
                                    </div>
                                    <div className="comment-box js-parentHandle">
                                        <p className="js-extend shortNote">{content.comment}</p>
                                        <ReadMore />
                                        <Counter/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </TabPanel>
            </Tabs>
        );
    }
}

export default ProfileTabs;