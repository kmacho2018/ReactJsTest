// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired,
    copyright2: PropTypes.string
  }
  render() {
    const { copyright , copyright2="&copy prueba 2"} = this.props;

    return (
      <div className="Footer">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{copyright}</h2>
          <p dangerouslySetInnerHTML={{ __html: copyright2}} />
        </div>
      </div>
    );
  }
}

export default Footer;
