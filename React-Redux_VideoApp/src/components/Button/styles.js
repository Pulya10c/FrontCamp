import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  outline: none;
  background-color: #004db9;
  border: 0;
  border-radius: 4px;
  color: white;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:disabled {
    cursor: not-allowed;
    background-color: #7792b8;
  }

  &:hover:not(:disabled) {
    background-color: #00183a;
  }

  &:active {
    background-color: #004db9;
    opacity: 0.7;
  }
`;
