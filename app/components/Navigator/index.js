import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Link } from 'react-router';
import messages from './messages';
import EineLogoSVG from '../../images/eine-logo-lbg.svg';

const NavHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 3.5rem 0;
`;

const NavFooter = styled.footer`
  align-items: center;
  color: #02BBF1;
  display: flex;
  font-size: .75rem;
  justify-content: center;
  padding: 2rem 0;
`;

const MenuSectionTitle = styled.div`
  color: #02BBF1;
  display: flex;
  font-size: 1.125rem;
  font-variant: small-caps;
  padding: .25rem 2rem;
`;

const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 -2.0rem 1rem -2.0rem;
  padding: 0;
`;

const MenuItem = styled.li`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-transform: capitalize;
`;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  color: #FFF;
  display: flex;
  text-decoration: none;
  text-transform: capitalize;
  border-left: 3px solid transparent;
  pointer-events: all;

  &:hover {
    border-left: 3px solid #02BBF1;
    background: linear-gradient(to right, #C9C9D3, #D9D7D7);
  }
`;

class Navigator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: React.PropTypes.node,
  };

  render() {
    return (
      <div className={this.props.className}>
        <NavHeader><img src={EineLogoSVG} width="50%" role="presentation" /></NavHeader>
        <MenuItems>
          <MenuSectionTitle><FormattedMessage {...messages.accounts_section} /></MenuSectionTitle>
          <MenuItem><StyledLink to="/"><FormattedMessage {...messages.summary} /></StyledLink></MenuItem>
          <MenuItem><StyledLink to="/account-list"><FormattedMessage {...messages.accounts} /></StyledLink></MenuItem>
        </MenuItems>
        <MenuItems>
          <MenuSectionTitle><FormattedMessage {...messages.transactions_section} /></MenuSectionTitle>
          <MenuItem><StyledLink to="/transfer-money"><FormattedMessage {...messages.transfer_money} /></StyledLink></MenuItem>
          <MenuItem><StyledLink to="/create-invoice"><FormattedMessage {...messages.create_invoice} /></StyledLink></MenuItem>
          <MenuItem><StyledLink to="/manage-subscriptions"><FormattedMessage {...messages.subscriptions} /></StyledLink></MenuItem>
        </MenuItems>
        <MenuItems>
          <MenuSectionTitle><FormattedMessage {...messages.loans_section} /></MenuSectionTitle>
          <MenuItem><StyledLink to="/apply-for-loan"><FormattedMessage {...messages.apply_for_loan} /></StyledLink></MenuItem>
          <MenuItem><StyledLink to="/load-overview"><FormattedMessage {...messages.loan_overview} /></StyledLink></MenuItem>
          <MenuItem><StyledLink to="/add-a-credit-card"><FormattedMessage {...messages.add_credit_card} /></StyledLink></MenuItem>
        </MenuItems>
        <NavFooter>
          ©&nbsp;<FormattedDate value={Date.now()} year="numeric" />&nbsp;<FormattedMessage {...messages.footer} />
        </NavFooter>
      </div>
    );
  }
}

const NavigatorStyled = styled(Navigator)`
  display: flex;
  flex-direction: column;
  background-color: #D4D1D1;
  flex: 1;
  padding: 0 2rem;
`;

module.exports.Navigator = NavigatorStyled;
