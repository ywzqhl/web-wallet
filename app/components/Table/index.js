import styled from 'styled-components';

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

  ${''/* background-color: yellow; */}
  align-items: center;
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

  justify-content: space-around;
`;

module.exports.TABLE = TABLE;
module.exports.TR = TR;
module.exports.HTR = HTR;
module.exports.TD = TD;
