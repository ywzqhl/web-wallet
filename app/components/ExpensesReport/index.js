import React from 'react';
import { FormattedNumber } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import {
  HalfWidthBlock,
  BlockTitle,
} from '../Blocks';
import {
  TABLE,
  TR,
  HTR,
  TD,
} from '../Table';

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

export default class ExpensesReport extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HalfWidthBlock>
        <BlockTitle>expenses report</BlockTitle>
      </HalfWidthBlock>
    );
  }
}
