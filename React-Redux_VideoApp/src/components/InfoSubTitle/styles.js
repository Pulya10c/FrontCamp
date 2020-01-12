import styled from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const InfoSubTitle = styled.h5`
  font-size: 20px;
  color: white;

  ${mediaMd`
    font-size: 18px;
  `};

  ${mediaSm`
    font-size: 16px;
  `};
`;
