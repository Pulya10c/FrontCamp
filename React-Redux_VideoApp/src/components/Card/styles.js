import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardStyled = styled(Link)`
  display: grid;
  grid-gap: 12px;
  align-content: start;
  padding: 4px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid rgba(218, 220, 224, 0.5);
  box-shadow: 0 20px 20px -20px $main-color;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 2px #00183a;
  }
`;
