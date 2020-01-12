import styled from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const SubTitle = styled.h3`
  font-size: 20px;

  ${mediaMd`
    font-size: 18px;
  `};

  ${mediaSm`
    font-size: 14px;
  `};
`;
