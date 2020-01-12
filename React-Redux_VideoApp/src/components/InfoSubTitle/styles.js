import styled from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const InfoSubTitle = styled.h5`
  font-size: 16px;
  color: white;

  ${mediaMd`
    font-size: 14px;
  `};

  ${mediaSm`
    font-size: 12px;
  `};
`;
