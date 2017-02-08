import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import ViktorAvatar from '../../images/viktor.jpg';
import ArrowDown from '../../images/arrow-down.svg';

class UserSettings extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: React.PropTypes.node,
  };

  render() {
    return (
      <ul className={this.props.className}>
        <img id="user-avatar" src={ViktorAvatar} role="presentation" />
        <div id="user-name">Viktor Warren</div>
        <img id="drop-down-arrow" src={ArrowDown} role="presentation" />
        <li>
          <ul>
            <li><Link to="/user-settings">settings</Link></li>
            <li><Link to="/logout">logout</Link></li>
          </ul>
        </li>
      </ul>
    )
  };
}

const transition_in = 'all ease 0.3s';
const transition_ou = 'all ease 3.0s';
const hover_color = 'rgba(140, 160, 179, 0.5)';
const hover_brd_color = 'rgba(140, 160, 179, 1)';

const StyledUserSettings = styled(UserSettings)`
  display: flex;
  pointer-events: all;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 0;
  list-style-type: none;
  justify-content: flex-end;

  & #user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    pointer-events: none;
  }

  & #user-name {
    font-family: 'Roboto';
    font-size: .9rem;
    color: #8ca0b3;
    pointer-events: none;
  }

  & #drop-down-arrow {
    width: 16px;
    height: 16px;
    pointer-events: none;
  }

  & a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #000;
  }

  & a:hover {
    color: #FFF;
  }

  & > *:not(:last-child) {
    margin-right: .5rem;
  }

  & > li {
    background-color: #FFF;
    border: 1px solid ${hover_brd_color};
    box-shadow: 0 0 10px ${hover_color};
    display: none;
    padding: .125rem;
    position: absolute;
    top: 3.0rem;
  }

  &:hover > li {
    display: flex;
    transition: all ease-in 5s;
    border-radius: 2px;
  }

  & > li > ul {
    padding: 3px;
  }

  & > li > ul > li:not(:last-of-type) {
    margin-bottom: .125rem;
  }

  & ul {
    display: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & ul li {
    padding: .125rem .5rem;
    transition: all ease 1.0s;
    width: 9.5rem;
  }

  & > li > ul > li:hover {
    background-color: #4595D1;
    color: #FFF;
    transition: all ease 0.25s;
  }

  & ul li ul {
    align-items: stretch;
  }

  &:hover ul {
    display: flex;
    flex-direction: column;
    font-variant: small-caps;
    font-family: 'Roboto Condensed';
  }
`;

module.exports.UserSettings = StyledUserSettings;
