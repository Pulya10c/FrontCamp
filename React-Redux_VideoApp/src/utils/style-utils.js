import { css } from 'styled-components';

export const mediaSm = (...args) => css`
  @media (max-width: 576px) {
    ${css(...args)};
  }
`;

export const mediaMd = (...args) => css`
  @media (max-width: 768px) {
    ${css(...args)};
  }
`;
