import styled, { css } from 'styled-components';

export const commonCssAnimation = css`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  animation: waiting 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  @keyframes waiting {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
  }
`;

export const SpinnerWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 20px);
  grid-template-rows: 120px;
  justify-content: center;
  align-content: center;
`;

export const FirstSpinnerBlock = styled.div`
  ${commonCssAnimation}
  background: #00fc9b;
  animation-delay: -0.6s;
`;

export const SecondSpinnerBlock = styled.div`
  ${commonCssAnimation}
  background: #e8ec00;
  animation-delay: -0.4s;
`;

export const ThirdSpinnerBlock = styled.div`
  ${commonCssAnimation}
  background: #008cff;
  animation-delay: -0.2s;
`;

export const FourthSpinnerBlock = styled.div`
  ${commonCssAnimation}
  background: #cc00ff;
`;
