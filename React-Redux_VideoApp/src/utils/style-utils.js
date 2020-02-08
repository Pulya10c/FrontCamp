import { css } from 'styled-components';

import { SM_SCREEN_SIZE, MD_SCREEN_SIZE } from 'src/constants';

export const mediaSm = (...args) => css`
  @media (max-width: ${SM_SCREEN_SIZE}px) {
    ${css(...args)};
  }
`;

export const mediaMd = (...args) => css`
  @media (max-width: ${MD_SCREEN_SIZE}px) {
    ${css(...args)};
  }
`;
