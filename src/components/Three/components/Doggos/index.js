/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './index.scss';
import heart from '../../../images/heart.png';


class Doggos extends Component {
  render() {
    return (
      <div className="heart">
        <img src={heart} alt="heart" />
      </div>
    );
  }
}

export default Doggos;
