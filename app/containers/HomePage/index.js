/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage, FormattedDate } from 'react-intl';
// import { PageContent } from '../Wrapper';
// import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="account-overview-section">
        <div id="account-overview-title">Account Overview</div>
        <table id="account-overview-items">
          <thead>
            <tr><td></td><td>type</td><td>account name</td><td>status</td><td>currency</td><td>balance</td></tr>
          </thead>
          <tbody>
            <tr><td></td><td>checking</td><td>1267451**** - WOLFE</td><td>active</td><td>USD</td><td>$6,266.33</td></tr>
            <tr><td></td><td>savings</td><td>5719371**** - MAENGUNE</td><td>active</td><td>USD</td><td>$10,998.10</td></tr>
            <tr><td></td><td>savings</td><td>7125781**** - KAISER</td><td>deactivated</td><td>USD</td><td>$23.86</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
