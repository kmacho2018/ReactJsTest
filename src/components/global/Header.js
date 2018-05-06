// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired 
  }
  render() {
    const { title, items} = this.props;

    //const title = this.props.title;
    //const items = this.props.items;
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}