import React, { Component } from 'react';
import './description.scss';
import ReadMore from '../../readMore/readmore';
import ProfileTabs from '../../tabs/tabs';
import Reviewbar from '../../body/reviewSection/reviewbar';
import TripsBar from '../../body/tripsSection/tripsbar';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            extendClassName: '',
        }
        this.handleSideTabSwitching = this.handleSideTabSwitching.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleMainTabSwitching = this.handleMainTabSwitching.bind(this);
        this.handleExtendClass = this.handleExtendClass.bind(this);
    }

    handleExtendClass = () => {
        this.setState(state => ({
            toggle: !state.toggle,
            setClassName: 'fullNote'
        }));
    }

    handleSideTabSwitching = () => {
        let sideTab = document.querySelectorAll('[data-id]');
        for (let x = 0; x < sideTab.length; x++) {
            sideTab[x].addEventListener('click', function() {
                let getdataVal = this.getAttribute('data-id');
                let triggerElem = document.querySelectorAll('.react-tabs__tab');
                for (let y = 0; y < triggerElem.length; y++) {
                    if (triggerElem[y].getAttribute('id') === getdataVal) {
                        triggerElem[y].click();
                    }
                }
            }, false);
        }
    }

    handleMainTabSwitching = () => {
        let mainTab = document.querySelectorAll('[data-value]');
        for (let x = 0; x < mainTab.length; x++) {
            mainTab[x].addEventListener('click', function() {
                let getdataVal = this.getAttribute('id');
                let mainTriggerElem = document.querySelectorAll('[data-id]');
                for (let y = 0; y < mainTriggerElem.length; y++) {
                    if (mainTriggerElem[y].getAttribute('data-id') === getdataVal) {
                        mainTriggerElem[y].click();
                    }
                }
            }, false);
        }
    }

    handleActive = (event) => {
        // reset all menu items
        document.querySelectorAll('.tab-list li.activeTab').forEach(function(item) {
            item.classList.remove('activeTab');
        })
        // mark as active selected menu item
        event.target.classList.add("activeTab");
    }

    componentDidMount() {
        this.handleSideTabSwitching();
        this.handleMainTabSwitching();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="description-wrapper">
                            <p className="js-extend shortNote">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </p>
                            <ReadMore />
                        </div>
                        <div className="tab-wrapper">
                            <ProfileTabs />
                        </div>
                    </div>
                    <div className="col-md-4 sidebar-view">
                        <div className='tabList'>
                            <ul className="tab-list" onClick={this.handleActive}>
                                <li className='activeTab' data-id="react-tabs-0">Journey</li>
                                <li data-id="react-tabs-2">Reviews</li>
                                <li data-id="react-tabs-4">Photos</li>
                                <li data-id="react-tabs-6">Trips</li>
                                <li data-id="react-tabs-8">Stats</li>
                            </ul>
                        </div>
                        <Reviewbar />
                        <TripsBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;