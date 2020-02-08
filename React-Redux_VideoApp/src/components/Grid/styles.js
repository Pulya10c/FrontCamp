import styled from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  font-size: 20px;
  padding: 5px;

  ${mediaMd`
    grid-template-columns: repeat(3, 1fr);
    font-size: 24px;
  `};

  ${mediaSm`
    grid-template-columns: repeat(1, 1fr);
    font-size: 20px;
  `};
`;
