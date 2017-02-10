import React from 'react';
import { FormattedNumber, FormattedTime } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

import SteamLogo from '../../images/steam-logo.svg';
import PayPalLogo from '../../images/paypal-logo.svg';
import DribbleLogo from '../../images/dribble-logo.svg';
import SpotifyLogo from '../../images/spotify-logo.svg';

import {
  HalfWidthBlock,
  BlockTitle,
} from '../Blocks';
import {
  TABLE,
  TR,
  TD,
} from '../Table';

const TDLogo = styled(TD)`
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  width: 3rem;
  flex: 0 0 auto;
  /*background-color: yellow;*/

  & > img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    /*box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);*/
  }
`;

const TRMonth = styled(TR)`
  background-color: #f2f1f1;
  color: #857d7d;
  font-size: 1.2rem;
  font-variant: small-caps;
  margin: .5rem 0;
  padding-left: .5rem;
`;

const TDMoDay = styled(TD)`
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 0 0 auto;
  font-family: 'Roboto Condensed';
  font-variant: small-caps;
  width: 2.5rem;

  & > div:first-child {
    font-size: 1.3rem;
    color: #C1C1C1;
    line-height: .8rem;
  }

  & > div:last-child {
    font-size: 1.8rem;
    color: #7D7D7D;
    line-height: 1.9rem;
  }
`;

const TDx2 = styled(TD)`
  flex: 2;
`;

const TDMProduct = styled(TDx2)`
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0 0 1.5rem;
  /*flex: 0 0 auto;*/
  font-family: 'Roboto Condensed';
  /*font-variant: small-caps;*/
  /*width: 2.5rem;*/

  & :first-child {
    font-size: 1.3rem;
    color: #7F7F7F;
    /*line-height: .8rem;*/
  }

  & :last-child {
    /*font-size: 1.8rem;*/
    color: #D5D5D5;
    /*line-height: 1.9rem;*/
  }
`;

const TDPrice = styled(TD)`
  flex-direction: column;
  align-items: stretch;
  padding-right: .5rem;

  & > :first-child {
    display: flex;
    color: #7F7F7F;
    font-size: 1.3rem;
    flex-direction: column;
    align-items: stretch;
    align-content: stretch;

    & > span {
      display: flex;
      justify-content: flex-end;
    }
  }

  & > :last-child {
    display: flex;
    color: #D5D5D5;
    font-size: .8rem;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const ScrollbarsStyled = styled(Scrollbars)`
  display: flex;
  flex-direction: column;
`;

class FormattedNumberStyled extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return(
      <div style={{ color: this.props.value < 0 ? 'red' : 'green' }}>
        <FormattedNumber {...this.props} />
      </div>
    );
  }
}

export default class RecentActivityList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HalfWidthBlock>
        <BlockTitle>recent activity</BlockTitle>
        <TABLE>
          <ScrollbarsStyled
            autoHide
            hideTracksWhenNotNeeded
            autoHideTimeout={500}
            autoHideDuration={50}
            autoHeight
            autoHeightMin={400}
            autoHeightMax={400}
            thumbMinSize={30}
            universal
          >
            <TRMonth>march</TRMonth>
            <TR>
              <TDMoDay>
                <div>mar</div>
                <div>20</div>
              </TDMoDay>
              <TDLogo><img src={SteamLogo} role="presentation" /></TDLogo>
              <TDMProduct>
                <div>Steam Credit</div>
                <div>Bought trails in the Sky SC</div>
              </TDMProduct>
              <TDPrice>
                <FormattedNumberStyled value={-8.20} style={'currency'} currency={'USD'} />
                <FormattedTime hour="2-digit" minute="2-digit" value={new Date()} />
              </TDPrice>
            </TR>
            <TR>
              <TDMoDay>
                <div>mar</div>
                <div>18</div>
              </TDMoDay>
              <TDLogo><img src={PayPalLogo} role="presentation" /></TDLogo>
              <TDMProduct>
                <div>Paypal Transfer</div>
                <div>Sent for design service</div>
              </TDMProduct>
              <TDPrice>
                <FormattedNumberStyled value={300.00} style={'currency'} currency={'USD'} minimumFractionDigits={2} maximumFractionDigits={2} />
                <FormattedTime hour="2-digit" minute="2-digit" value={new Date()} />
              </TDPrice>
            </TR>
            <TR>
              <TDMoDay>
                <div>mar</div>
                <div>04</div>
              </TDMoDay>
              <TDLogo><img src={DribbleLogo} role="presentation" /></TDLogo>
              <TDMProduct>
                <div>Dribble Pro</div>
                <div>Subscription</div>
              </TDMProduct>
              <TDPrice>
                <FormattedNumberStyled value={-19.99} style={'currency'} currency={'USD'} minimumFractionDigits={2} maximumFractionDigits={2} />
                <FormattedTime hour="2-digit" minute="2-digit" value={new Date()} />
              </TDPrice>
            </TR>
            <TRMonth>february</TRMonth>
            <TR>
              <TDMoDay>
                <div>feb</div>
                <div>01</div>
              </TDMoDay>
              <TDLogo><img src={SpotifyLogo} role="presentation" /></TDLogo>
              <TDMProduct>
                <div>Spotify Premium</div>
                <div>Subscription</div>
              </TDMProduct>
              <TDPrice>
                <FormattedNumberStyled value={-9.99} style={'currency'} currency={'USD'} minimumFractionDigits={2} maximumFractionDigits={2} />
                <FormattedTime hour="2-digit" minute="2-digit" value={new Date()} />
              </TDPrice>
            </TR>
          </ScrollbarsStyled>
        </TABLE>
      </HalfWidthBlock>
    );
  }
}
