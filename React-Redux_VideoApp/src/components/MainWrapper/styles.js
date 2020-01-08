import styled from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 1240px;
  padding: 5px;

  ${mediaMd`
     max-width: 720px;
  `};

  ${mediaSm`
     max-width: 550px;
  `};
`;
