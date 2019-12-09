import React from 'react';
import './styles/BadgeList.css';
import twitterLogo from '../images/icons/twitter.svg';

class BadgeList extends React.Component {
    render(){
        return(
            <React.Fragment>
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => {
                        return(
                            <li className="BadgeList" key={badge.id}>
                                <div className="BadgeList__avatar">
                                    <img src={badge.avatarUrl} alt=""/>
                                </div>
                                <div className="BadgeList__name">
                                    <h5>{badge.firstName} {badge.lastName}</h5>
                                </div>
                                <div className="BadgeList__twitter">
                                    <img src={twitterLogo} alt=""/>@{badge.twitter}
                                </div>
                                <div className="BadgeList__jobTitle">
                                    {badge.jobTitle}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default BadgeList;