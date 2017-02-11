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
// import {
//   FullWidthBlock,
// } from '../../components/Blocks';

// import { FormattedMessage, FormattedDate } from 'react-intl';
// import { PageContent } from '../Wrapper';
// import messages from './messages';

const CenteredBlock = styled.article`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  & > div:not(:first-of-type) {
    margin-top: .125rem;
  }

  & > div:not(:last-of-type) {
    margin-bottom: .125rem;
  }

  & button[type="submit"] {}

`;

const InputRow = styled.div`
  display: flex;
  ${''/* background-color: rgba(230, 229, 229, 0.5); */}
  width: 50%;

  & > input {
    display: flex;
    flex: 1;
    ${''/* background-color: yellow; */}
    background-color: rgba(248, 249, 252, 0.7);
  }

  & > input:focus {
    background-color: rgba(255, 255, 255, 1.0);
  }

  & > input {
    padding: .5rem;
    line-height: 4.5rem;
  }

  & > input[type='button'] {
    background-color: red;
    justify-content: center;
    border-radius: 3px;
  }
`;

const LoginInput = styled.input`
  background-color: #EDEDED;
  border-radius: 3px;
  color: #B1B1B1;
  display: flex;
  flex-direction: row;
  flex: 1;
  pointer-events: all;
  font-size: 3rem;
  font-variant: small-caps;

  &[placeholder]          {
    text-overflow:ellipsis;
  }

  &::-moz-placeholder     {
    text-overflow:ellipsis;
  }

  &:-moz-placeholder      {
    text-overflow:ellipsis;
  }

  &:-ms-input-placeholder {
    text-overflow:ellipsis;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus::-moz-placeholder {
    color: transparent;
  }

  &:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
  }
`;

const PasswordInput = styled(LoginInput)`

`;

const SendButton = styled.button`
  background-color: #4595d1;
  flex: 1;
  font-size: 1.5rem;
  line-height: 4.5rem;
  padding: .5rem;
  margin: .5rem 0;
  color: white;
  font-variant: small-caps;
  cursor: pointer;
  border: 1px solid #99c4e6;
  outline: none;

  &:hover {
    box-shadow: 3px 3px 0px 0px rgb(212, 209, 209);
  }

  &:active {
    box-shadow: inset 0px 0px 15px 5px rgb(71, 129, 173), 0px 0px 1px 1px #fcfcfd;
  }
`;

export default class Auth extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CenteredBlock>
        <InputRow>
          <LoginInput id="login" name="login" type="text" placeholder="login" autocomplete="on" />
        </InputRow>
        <InputRow>
          <PasswordInput id="password" name="password" type="password" placeholder="password" autocomplete="on" />
        </InputRow>
        <InputRow>
          <SendButton type="submit">authenticate</SendButton>
        </InputRow>
      </CenteredBlock>
    );
  }
}
