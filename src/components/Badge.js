import React from 'react';
import ConfLogo from '../images/badge-header.svg';

import './styles/Badge.css';
import '../global.css'

class Badge extends React.Component {
  render() {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <div className="Badge__image">
          <img src={ConfLogo} alt="Platzi Badge Logo"/>
        </div>
      </div>
      <div className="Badge__avatar">
        <div className="Badge__avatar--image">
          <img src={this.props.avatarUrl} alt="Avatar"/>
        </div>
      </div>
      <div className="Badge__title">
        <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
      </div>
      <div className="Badge__description">
        <h3>{this.props.jobTitle}</h3>
       <div>@{this.props.twitter}</div>
      </div>
      <div className="Badge__footer">
        <p>#platziConf</p>
      </div>
    </div>
  );
  }
}

export default Badge;
