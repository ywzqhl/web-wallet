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
import { FormattedNumber } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import ChequeIcon from '../../images/cheque.svg';
import SavingsIcon from '../../images/savings.svg';

const FullWidthBlock = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  padding: .5rem 1rem;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(141, 141, 141, 0.10);

  &:hover {
    box-shadow: 0 0 10px rgba(141, 141, 141, 0.25);
  }
`;

const BlockTitle = styled.header`
  display: flex;
  border-bottom: 1px solid #F4F4F4;
  border-radius: 3px;
  margin: 0 -1rem;
  padding: 1rem 1rem 1rem 3rem;
  color: #8D8D8D;
  font-size: 1.125rem;
`;

const STable = styled.table`
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;

const SThead = styled.thead`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`;

const STbody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const STr = styled.tr`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 1rem 0 .5rem 0;
  color: #8D8D8D;
  text-transform: capitalize;
  align-items: center;
`;

const STd = styled.td`
  display: flex;
  flex: 3;
`;

const STdBallance = styled.td`
  display: flex;
  flex: 3;
  justify-content: flex-end;
`;

const STdEmpty = styled.td`
  display: flex;
  flex: 1;
`;

export default class AccountSummary extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullWidthBlock>
        <BlockTitle>Account Overview</BlockTitle>
        <Scrollbars
          style={{ height: 300 }}
          autoHide
          hideTracksWhenNotNeeded
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax={200}
          thumbMinSize={30}
          universal={true}>
          <STable>
            <SThead>
              <STr>
                <STdEmpty></STdEmpty>
                <STd>type</STd>
                <STd>account name</STd>
                <STd>status</STd>
                <STd>currency</STd>
                <STdBallance>balance</STdBallance>
              </STr>
            </SThead>
            <STbody>
              <STr>
                <STdEmpty><img src={ChequeIcon} width="36px" height="36px" role="presentation" /></STdEmpty>
                <STd>checking</STd>
                <STd>1267451**** - WOLFE</STd>
                <STd>active</STd>
                <STd>USD</STd>
                <STdBallance>
                  <FormattedNumber value={6266.33} />
                </STdBallance>
              </STr>
              <STr>
                <STdEmpty><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></STdEmpty>
                <STd>savings</STd>
                <STd>5719371**** - MAENGUNE</STd>
                <STd>active</STd>
                <STd>USD</STd>
                <STdBallance>
                  <FormattedNumber value={10998.10} />
                </STdBallance>
              </STr>
              <STr>
                <STdEmpty><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></STdEmpty>
                <STd>savings</STd>
                <STd>7125781**** - KAISER</STd>
                <STd>deactivated</STd>
                <STd>USD</STd>
                <STdBallance>
                  <FormattedNumber value={23.86} />
                </STdBallance>
              </STr>
            </STbody>
          </STable>
        </Scrollbars>
      </FullWidthBlock>
    );
  }
}
