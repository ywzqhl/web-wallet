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

const TABLE = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: .5rem 0;
`;

const TR = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
`;

const HTR = styled(TR)`
  background-color: rgba(212, 209, 209, 0.3);
  color: #8F8F8F;
  font-size: 1.125rem;
  font-variant: small-caps;
  font-weight: 600;
  padding: .25rem 0;
  margin-bottom: .5rem;
`;

const TD = styled.div`
  display: flex;
  flex: 1;
  padding: .25rem 0;
`;

const TDxAR = styled(TD)`
  justify-content: flex-end;
  padding-right: 1rem;
`;

const TDx2 = styled(TD)`
  flex: 2;
`;

const TDAuto = styled(TD)`
  flex: 0 0 75px;
  padding: .25rem;
`;

const ScrollbarsStyled = styled(Scrollbars)`
  display: flex;
  flex-direction: column;
`;

export default class AccountSummary extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullWidthBlock>
        <BlockTitle>Account Overview</BlockTitle>
        <TABLE>
          <HTR className="table-header">
            <TDAuto>&nbsp;</TDAuto>
            <TD>type</TD>
            <TDx2>account name</TDx2>
            <TD>status</TD>
            <TD>currency</TD>
            <TDxAR>balance</TDxAR>
          </HTR>
          <ScrollbarsStyled
            style={{ height: 300 }}
            autoHide
            hideTracksWhenNotNeeded
            autoHideTimeout={500}
            autoHideDuration={50}
            autoHeight
            autoHeightMin={0}
            autoHeightMax={200}
            thumbMinSize={30}
            universal
          >
            <TR>
              <TDAuto><img src={ChequeIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TD>checking</TD>
              <TDx2>1267451**** - WOLFE</TDx2>
              <TD>active</TD>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={6266.33} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TD>savings</TD>
              <TDx2>5719371**** - MAENGUNE</TDx2>
              <TD>active</TD>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={10998.10} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TD>savings</TD>
              <TDx2>7125781**** - KAISER</TDx2>
              <TD>deactivated</TD>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={23.86} />
              </TDxAR>
            </TR>

            <TR>
              <TDAuto><img src={ChequeIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TD>checking</TD>
              <TDx2>1267451**** - WOLFE</TDx2>
              <TD>active</TD>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={6266.33} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TD>savings</TD>
              <TDx2>5719371**** - MAENGUNE</TDx2>
              <TD>active</TD>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={10998.10} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TD>savings</TD>
              <TDx2>7125781**** - KAISER</TDx2>
              <TD>deactivated</TD>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={23.86} />
              </TDxAR>
            </TR>
          </ScrollbarsStyled>
        </TABLE>
      </FullWidthBlock>
    );
  }
}
