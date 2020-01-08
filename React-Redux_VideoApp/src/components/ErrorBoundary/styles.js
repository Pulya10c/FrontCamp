import styled, { css } from 'styled-components'

export const commonAnimation = css`
  opacity: 0;
  animation: appear 500ms cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const ErrorWrapper = styled.div`
  margin: 40px auto;
  text-align: center;
`

export const ErrorTitle = styled.h1`
  ${commonAnimation}

  font-size: 40px;
  animation-delay: 0;
`

export const ErrorSubTitle = styled.h2`
  ${commonAnimation}

  font-size: 30px;
  animation-delay: 200ms;
`

export const ErrorContent = styled.p`
  ${commonAnimation}

  font-size: 18px;
  margin: 2em;
  animation-delay: 500ms;
`
