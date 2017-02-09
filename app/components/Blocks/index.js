import styled from 'styled-components';

const FullWidthBlock = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  padding: .5rem 1rem;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(141, 141, 141, 0.10);
  margin-bottom: 1rem;
  flex-basis: 100%;

  &:hover {
    box-shadow: 0 0 10px rgba(141, 141, 141, 0.25);
  }
`;

const HalfWidthBlock = styled(FullWidthBlock)`
    flex-basis: 49.4%;
`;

const BlockTitle = styled.header`
  display: flex;
  border-bottom: 1px solid #F4F4F4;
  border-radius: 3px;
  margin: 0 -1rem;
  padding: 1rem 1rem 1rem 3rem;
  color: #8D8D8D;
  font-size: 1.125rem;
  text-transform: capitalize;
`;

module.exports.FullWidthBlock = FullWidthBlock;
module.exports.BlockTitle = BlockTitle;
module.exports.HalfWidthBlock = HalfWidthBlock;
