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
import styled from 'styled-components';
import AccountList from '../../components/AccountList';
import RecentActivityList from '../../components/RecentActivityList';
import ExpensesReport from '../../components/ExpensesReport';

const ROW = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default class AccountSummary extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AccountList />
        <ROW>
          <RecentActivityList />
          <ExpensesReport />
        </ROW>
      </div>
    );
  }
}
