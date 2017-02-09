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
import {
  FullWidthBlock,
  BlockTitle,
} from '../Blocks';
import {
  TABLE,
  TR,
  HTR,
  TD,
} from '../Table';
import ChequeIcon from '../../images/cheque.svg';
import SavingsIcon from '../../images/savings.svg';

const TDxAR = styled(TD)`
  justify-content: flex-end;
  padding-right: 1rem;
`;

const TDAccount = styled(TD)`
  flex: 2;
  padding-left: 4rem;
  justify-content: flex-start;
`;

const TDAuto = styled(TD)`
  flex: 0 0 75px;
  padding: .25rem;
`;

const TDStatus = styled(TD)`
  justify-content: flex-start;
  padding-left: 2rem;
`;

const TDType = styled(TD)`
  justify-content: flex-start;
  padding-left: 2rem;
`;

const ScrollbarsStyled = styled(Scrollbars)`
  display: flex;
  flex-direction: column;
`;

export default class AccountList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullWidthBlock>
        <BlockTitle>account overview</BlockTitle>
        <TABLE>
          <HTR>
            <TDAuto>&nbsp;</TDAuto>
            <TDType>type</TDType>
            <TDAccount>account name</TDAccount>
            <TDStatus>status</TDStatus>
            <TD>currency</TD>
            <TDxAR>balance</TDxAR>
          </HTR>
          <ScrollbarsStyled
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
              <TDType>checking</TDType>
              <TDAccount>1267451**** - WOLFE</TDAccount>
              <TDStatus>active</TDStatus>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={6266.33} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TDType>savings</TDType>
              <TDAccount>5719371**** - MAENGUNE</TDAccount>
              <TDStatus>active</TDStatus>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={10998.10} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TDType>savings</TDType>
              <TDAccount>7125781**** - KAISER</TDAccount>
              <TDStatus>deactivated</TDStatus>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={23.86} />
              </TDxAR>
            </TR>

            <TR>
              <TDAuto><img src={ChequeIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TDType>checking</TDType>
              <TDAccount>1267451**** - WOLFE</TDAccount>
              <TDStatus>active</TDStatus>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={6266.33} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TDType>savings</TDType>
              <TDAccount>5719371**** - MAENGUNE</TDAccount>
              <TDStatus>active</TDStatus>
              <TD>USD</TD>
              <TDxAR>
                <FormattedNumber value={10998.10} />
              </TDxAR>
            </TR>
            <TR>
              <TDAuto><img src={SavingsIcon} width="36px" height="36px" role="presentation" /></TDAuto>
              <TDType>savings</TDType>
              <TDAccount>7125781**** - KAISER</TDAccount>
              <TDStatus>deactivated</TDStatus>
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
