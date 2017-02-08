import styled from 'styled-components';
import SearchIcon from '../../images/search-icon.svg';


const AppContainer = styled.article`
  display: flex;
  flex-direction: row;
  background-color: #F5F6FA;
  min-width: 80%;
`;

const Page = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #F5F6FA;
  padding: 0;
  flex: 7;
`;

const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  background-color: #FFF;
  align-items: center;
`;

const Navigator = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #D4D1D1;
  flex: 1;
`;

const PageContent = styled.article`
  display: flex;
  flex-direction: column;
  flex: 8;
  padding: 2rem;
  pointer-events: all;
`;

const PageHeaderSearchField = styled.input`
  background-color: #EDEDED;
  background-image: url(${SearchIcon});
  background-position: 4px 4px;
  background-repeat: no-repeat;
  background-size: 1.5rem;
  border-radius: 3px;
  color: #B1B1B1;
  display: flex;
  flex-direction: row;
  line-height: 1rem;
  margin-left: 1rem;
  max-width: 30%;
  min-width: 30%;
  padding: .5rem 0 .5rem 2.5rem;
  pointer-events: all;

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

const PageHeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const PageHeaderControlNotifications = styled.img`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 .25rem;
  pointer-events: all;
`;

const PageHeaderMessages = styled.img`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 .25rem;
  pointer-events: all;
`;

const PageHeaderSalute = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  padding: 1.75rem;
  background-color: #4595D1;

  & a {
    pointer-events: all;
  }

  & > div > div {
    align-items: center;
    justify-content: center;
  }

  & > div:not(:last-of-type) {
    border-right: 1px solid rgba(255, 255, 255, 0.25);
  }

  & > div:first-of-type {
    justify-content: flex-start;
  }

  & > div:last-of-type {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    & > a {
      display: flex;
      background-color: #FFF;
      width: 8rem;
      padding: .25rem;
      border-radius: 3px;
      border: none;
      justify-content: center;
      text-transform: capitalize;
      text-decoration: none;
      color: #5BDBF8;
      font-size: .8rem;
      transition: box-shadow ease-in-out 0.1s;
    }

    & > a:hover {
      border-color: #000;
      box-shadow: 0 0 3px 2px rgba(255, 255, 255, 0.75);
    }

    & > a:active {
      box-shadow: 0 0 0px 1px #add0eb, inset 0 0 3px rgba(0, 0, 0, 0.5);
      transition: box-shadow cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }

  }

`;

const UserAvatar = styled.img`
  display: flex;
  width: 64px;
  height: 64px;
  margin-right: 1rem;
  border-radius: 50%;
`;

const UserMessage = styled.div`
  align-items: flex-start;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const WelcomeBack = styled.div`
  display: flex;
  font-size: 1.5rem;
`;

const LastLogin = styled.div`
  display: flex;
  font-size: .75rem;
`;

const TotalBallance = styled.div`
  display: flex;
  align-items: center;
  color: #FFF;
  font-size: 2.5rem;
`;

const Block = styled.div`
  display: flex;
  flex: 1;

  & > div {
    display: flex;
    flex: 1;
  }
`;

const EineLogo = styled.img`

`;

const UserSettings = styled.div`

`;

const CallToActionButtons = styled.div`
  display: flex;
`;

module.exports.AppContainer = AppContainer;
module.exports.Page = Page;
module.exports.PageContent = PageContent;
module.exports.Navigator = Navigator;
module.exports.PageHeader = PageHeader;
module.exports.PageHeaderSearchField = PageHeaderSearchField;
module.exports.PageHeaderControls = PageHeaderControls;
module.exports.PageHeaderControlNotifications = PageHeaderControlNotifications;
module.exports.PageHeaderMessages = PageHeaderMessages;
module.exports.PageHeaderSalute = PageHeaderSalute;
module.exports.UserAvatar = UserAvatar;
module.exports.WelcomeBack = WelcomeBack;
module.exports.LastLogin = LastLogin;
module.exports.UserMessage = UserMessage;
module.exports.TotalBallance = TotalBallance;
module.exports.Block = Block;
module.exports.EineLogo = EineLogo;
module.exports.UserSettings = UserSettings;
module.exports.CallToActionButtons = CallToActionButtons;
