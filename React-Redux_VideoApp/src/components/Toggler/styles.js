import styled, { css } from 'styled-components';
import { mediaMd, mediaSm } from 'utils/style-utils';

export const TogglerWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: auto auto auto;
  align-content: center;
  align-items: center;
`;

export const TogglerRadioOption = styled.input`
  display: none;
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

  ${mediaMd`
    padding: 3px 6px;
  `};

  ${mediaSm`
    padding: 2px 5px;
  `};

  &:hover {
    background-color: #2b6846;
  }
`;

export const TogglerTitle = styled.h2`
  font-size: 18px;

  ${mediaMd`
    font-size: 14px;
  `};

  ${mediaSm`
    font-size: 10px;
  `};
`;
