import styled from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const MainTitle = styled.h1`
  font-size: 30px;

  ${mediaMd`
    font-size: 26px;
  `};

  ${mediaSm`
    font-size: 20px;
  `};
`;
