import styled from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const MainTitle = styled.h1`
  font-size: 26px;

  ${mediaMd`
    font-size: 20px;
  `};

  ${mediaSm`
    font-size: 16px;
  `};
`;
