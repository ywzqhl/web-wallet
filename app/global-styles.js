import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    pointer-events: none;
  }

  body {
    font-family: 'Roboto';
  }

  body.fontLoaded {
    font-family: 'Roboto';
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      width: 80%;
      min-width: 80%;
    }
  }

  p,
  label {
    font-family: 'Roboto';
    line-height: 1.5em;
  }
`;
