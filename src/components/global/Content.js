//Dependencies
import React, { Component } from 'react';
import logo from './images/logo.svg';
import PropTypes from  'prop-types';

//Assets
import './css/Content.css';

class Content extends Component {
  static PropTypes ={
    body: PropTypes.object.isRequired
  };
  render() {
    const {body} = this.props;
    return (
      <div className="Content">
      {body}
      </div>
    );
  }
}

export default Content;
