import styled, { css } from 'styled-components';

export const TogglerWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-auto-flow: rows;
  grid-template-columns: auto;
  justify-content: center;
  align-content: center;
`;

export const TogglerRadioOption = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;

  &:checked + label {
    background-color: #58ba83;
  }
`;

export const TogglerLabelOption = styled.label`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  background-color: #454545;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  transition: all 0.3s ease-out;
`;

export const TogglerTitle = styled.h2`
  font-size: 20px;
`;
