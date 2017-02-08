/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router';
import { Navigator } from '../../components/Navigator';
import { UserSettings } from '../../components/UserSettings';

import {
  AppContainer,
  Page,
  PageHeader,
  PageContent,
  PageHeaderSearchField,
  PageHeaderControls,
  PageHeaderControlNotifications,
  PageHeaderMessages,
  PageHeaderSalute,
  UserAvatar,
  WelcomeBack,
  LastLogin,
  UserMessage,
  TotalBallance,
  Block,
} from '../Wrapper';

import ViktorAvatar from '../../images/viktor.jpg';
import NotificationNoneIcon from '../../images/notification-none.svg';
import NotificationNewIcon from '../../images/notification-new.svg';
import NotificationAlertIcon from '../../images/notification-alert.svg';
import MessagesNoneIcon from '../../images/messages-none.svg';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppContainer>
        <Navigator />
        <Page>
          <PageHeader>
            <PageHeaderSearchField id="search-site" type="search" name="search-site" placeholder="search site" />
            <PageHeaderControls>
              <PageHeaderControlNotifications src={NotificationNoneIcon} role="presentation" />
              <PageHeaderMessages src={MessagesNoneIcon} role="presentation" />
              <UserSettings />
            </PageHeaderControls>
          </PageHeader>
          <PageHeaderSalute>
            <Block>
              <UserAvatar src={ViktorAvatar} role="presentation" />
              <UserMessage>
                <WelcomeBack>Welcome back, Victor!</WelcomeBack>
                <LastLogin>Your last login was 09/06/2016 05:34:59 PM</LastLogin>
              </UserMessage>
            </Block>
            <Block>
              <TotalBallance title="total ballance">$17,288.29</TotalBallance>
            </Block>
            <Block>
              <Link to="/pay-your-bills">pay your bills</Link>
              <Link to="/transfer-money">make a transfer</Link>
            </Block>
          </PageHeaderSalute>
          <PageContent>
            {React.Children.toArray(this.props.children)}
          </PageContent>
        </Page>
      </AppContainer>
    );
  }
}
